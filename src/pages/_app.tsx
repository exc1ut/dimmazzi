import { AppProps } from 'next/app'
import '../lib/i18n'
import { Providers } from '../providers/Providers'
import { AppLayout } from '../ui/layouts/AppLayout'

import { initMock } from '../mocks/'

import '../ui/features/Carousel/styles.css'
import '../styles/global.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import router, { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [shouldRender, setShouldRender] = useState(false)
  const router = useRouter()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [router.pathname])

  useEffect(() => {
    ;(async () => {
      if (process.env.NEXT_PUBLIC_ENV === 'mock') {
        await initMock()
        setShouldRender(true)
      } else {
        setShouldRender(true)
      }
    })()
  })

  if (!shouldRender) return null

  const AnyComponent = Component as any

  return (
    <Providers pageProps={pageProps}>
      <AppLayout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <AnyComponent {...pageProps} canonical={router.pathname} key={router.pathname} />
        </AnimatePresence>
      </AppLayout>
    </Providers>
  )
}

export default MyApp
