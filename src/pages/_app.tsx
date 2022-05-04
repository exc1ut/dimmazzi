import { AppProps } from 'next/app'
import '../lib/i18n'
import { Providers } from '../providers/Providers'
import { AppLayout } from '../ui/layouts/AppLayout'

import { initMock } from '../mocks/'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../ui/features/Carousel/styles.css'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import router, { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [shouldRender, setShouldRender] = useState(false)
  const router = useRouter()

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
    <Providers>
      <AppLayout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <AnyComponent {...pageProps} canonical={router.pathname} key={router.pathname} />
        </AnimatePresence>
      </AppLayout>
    </Providers>
  )
}

export default MyApp
