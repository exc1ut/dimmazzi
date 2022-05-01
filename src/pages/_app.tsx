import { AppProps } from 'next/app'
import '../lib/i18n'
import { Providers } from '../providers/Providers'
import { AppLayout } from '../ui/layouts/AppLayout'

import { initMock } from '../mocks/'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from 'react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [shouldRender, setShouldRender] = useState(false)

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
        <AnyComponent {...pageProps} />
      </AppLayout>
    </Providers>
  )
}

export default MyApp
