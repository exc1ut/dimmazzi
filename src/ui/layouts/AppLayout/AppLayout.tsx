import * as React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Container } from '@chakra-ui/react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AppLayoutProps = {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container py={6} maxW={'container.xl'}>
        {children}
      </Container>
      <Footer />
    </>
  )
}
