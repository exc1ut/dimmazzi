const { chakraTheme } = require('../src/theme/chakraTheme')

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  chakra: {
    resetCss: true,
    theme: chakraTheme,
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
