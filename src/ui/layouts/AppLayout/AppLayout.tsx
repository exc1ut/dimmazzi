import * as React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { Box, Container, Divider, Link, Spinner, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRestaurantListQuery } from '@/api/restaurant/useRestaurantListQuery'
import { useMobileStore } from '../Header/useMobileStore'
import { SearchCard } from '@/ui/cards/SearchCard'
import Empty from '@/ui/features/Status/Empty'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AppLayoutProps = {}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const router = useRouter()
  const { searchVisible, search } = useMobileStore();
  const response = useRestaurantListQuery({ search: search }, {
    enabled: !!searchVisible && !!search,
  });

  return (
    <>
      <Header />
      <Container
        py={6}
        maxW={'container.xl'}
        p={searchVisible ? '0.2rem' : '1rem'}
        minH={'70vh'}
      >
        {searchVisible && ((response.data && response.data.results.length && search) ? (<VStack w="100%">
          {response.data.results.map((item) => {
            return (<Link href={`/restaurant/${item.id}`} w="full">
              <a><SearchCard name={item.title} category={'fastfood'} img={item.logo.file} /></a>
              <Divider />
            </Link>)
          })}

        </VStack>) : response.isFetching ? <Box w="100%" display="flex" justifyContent="center"><Spinner /> </Box> : (!response.data?.results.length && search) ? <Empty /> : null)}
        {!searchVisible && children}
      </Container>

      <Footer />
    </>
  )
}
