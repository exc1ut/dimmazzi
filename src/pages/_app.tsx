import { AppProps } from 'next/app'
import '../lib/i18n'
import { Providers } from '../providers/Providers'
import { AppLayout } from '../ui/layouts/AppLayout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any

  return (
    <Providers>
      <AppLayout>
        <AnyComponent {...pageProps} />
      </AppLayout>
    </Providers>
  )
}

export default MyApp
