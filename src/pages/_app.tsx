import { AppProps } from 'next/app'
import '../lib/i18n'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any

  return <AnyComponent {...pageProps} />
}

export default MyApp
