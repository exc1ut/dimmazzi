import { AppProps } from 'next/app'
import '../lib/i18n'
import { Providers } from '../providers/Providers'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any

  return (
    <Providers >
      <AnyComponent {...pageProps} />
    </Providers>
  )
}

export default MyApp
