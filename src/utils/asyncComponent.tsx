import dynamic from 'next/dynamic'
import React from 'react'
import { AppLoader } from '../ui/AppComponents/AppLoader'
import { PageMotion } from '../ui/PageMotion'

export const asyncComponent = (importComponent: any) => {
  return dynamic(importComponent, {
    loading: () => <AppLoader />,
  })
}
