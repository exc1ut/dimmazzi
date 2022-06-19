import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './react-query'
import NiceModal from '@ebay/nice-modal-react'

const AllTheProviders: React.FC = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

const customRender = (
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  options?: RenderResult
) => render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
