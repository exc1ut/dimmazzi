import * as React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AppLayoutProps = {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const router = useRouter()
  return (
    <>
      {!router.pathname.includes('/search/mobile') ? <Header /> : null}
      <Container
        py={!router.pathname.includes('/search/mobile') ? 6 : 0}
        maxW={'container.xl'}
        p={!router.pathname.includes('/search/mobile') ? '1rem' : '0'}
        minH={'70vh'}
      >
        {children}
      </Container>
      <Footer />
    </>
  )
}
