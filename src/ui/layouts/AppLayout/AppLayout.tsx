import * as React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AppLayoutProps = {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
