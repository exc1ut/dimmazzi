import { chakraTheme } from '../src/theme/chakraTheme'
import * as NextImage from 'next/image'
import { addDecorator } from '@storybook/react'
import NiceModal from '@ebay/nice-modal-react'

// Deoptimize Next image

const OriginalNextImage = NextImage.default

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
})

const customViewports = {
  sm: {
    name: 'sm',
    styles: {
      width: '320px',
      height: '100vh',
    },
  },
  md: {
    name: 'md',
    styles: {
      width: '768px',
      height: '100vh',
    },
  },
  lg: {
    name: 'lg',
    styles: {
      width: '960px',
      height: '100vh',
    },
  },
  xl: {
    name: 'xl',
    styles: {
      width: '1200px',
      height: '100vh',
    },
  },
  '2xl': {
    name: '2xl',
    styles: {
      width: '1536px',
      height: '100vh',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  chakra: {
    theme: chakraTheme,
  },

  viewport: {
    viewports: customViewports,
    // defaultViewport: '2xl',
  },

  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins || []
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      })
    )
    return {
      ...config,
      plugins: config.plugins.filter((plugin) => {
        if (plugin.constructor.name === 'ESLintWebpackPlugin') {
          return false
        }
        return true
      }),
    }
  },
}

// addDecorator((story) => <NiceModal.Provider>{story()}</NiceModal.Provider>)
