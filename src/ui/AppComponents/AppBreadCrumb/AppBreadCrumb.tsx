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
  console.log(items)

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
            {isCurrent ? (
              <p>{v.label}</p>
            ) : (
              <Link href={v.link}>
                <a>{v.label}</a>
              </Link>
            )}
          </BreadcrumbItem>
        )
      })}
    </Breadcrumb>
  )
}

export { AppBreadCrumb }
