import { AppProps } from 'next/app'
import '../lib/i18n'
import { Providers } from '../providers/Providers'
import { AppLayout } from '../ui/layouts/AppLayout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any

  return (
<<<<<<< HEAD
    <Providers>
      <AppLayout>
        <AnyComponent {...pageProps} />
      </AppLayout>
=======
    <Providers >
      <AnyComponent {...pageProps} />
>>>>>>> master
    </Providers>
  )
}

export default MyApp
