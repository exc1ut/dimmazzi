import { BreadcrumbItem, BreadcrumbLink, BreadcrumbLinkProps } from '@chakra-ui/react'
import Link from 'next/link'
import { ReactNode } from 'react'

type Props = BreadcrumbLinkProps & {
  children: ReactNode
}

export const AppBreadCrumbItem = ({ children, ...props }: Props) => {
  return (
    <BreadcrumbItem>
      <BreadcrumbLink>{children}</BreadcrumbLink>
    </BreadcrumbItem>
  )
}
