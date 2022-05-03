import { ChevronRightIcon } from '@chakra-ui/icons'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Link from 'next/link'

export type BreadCrumb = {
  label: string
  link: string
}

interface AppBreadCrumbProps {
  items: BreadCrumb[]
}

const AppBreadCrumb = ({ items }: AppBreadCrumbProps) => {
  return (
    <Breadcrumb spacing={2} separator={<ChevronRightIcon boxSize={'1.4em'} />}>
      {items.map((v, index) => {
        const isCurrent = index === items.length - 1
        return (
          <BreadcrumbItem
            color={isCurrent ? 'premium_dark.1000' : 'premium_dark.500'}
            fontWeight={isCurrent ? 600 : 400}
            isCurrentPage={isCurrent}
          >
            <Link href={v.link}>
              <a>{v.label}</a>
            </Link>
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}

export { AppBreadCrumb }
