import dynamic from 'next/dynamic'
import React from 'react'
import { AppLoader } from '../ui/AppComponents/AppLoader'

export const asyncComponent = (importComponent: any) => {
  return dynamic(importComponent, {
    loading: () => <AppLoader />,
  })
}
