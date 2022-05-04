import { Box, Button, Divider, Flex, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { useRestourantDetail } from '../../api/restourant/useRestourantDetail'
import { AppBreadCrumb, BreadCrumb } from '../../ui/AppComponents/AppBreadCrumb'
import { AppLoader } from '../../ui/AppComponents/AppLoader'
import { MealCard } from '../../ui/cards/MealCard'
import { Carousel } from '../../ui/features/Carousel'
import { PageMotion } from '../../ui/PageMotion'
import { getTime } from '../../utils/getTime'
import { Restourant } from './Restourant/Restourant'

export default () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, isSuccess } = useRestourantDetail(+id!)
  const { t } = useTranslation()

  const breadCrumb: BreadCrumb[] = [
    {
      label: t`Asosiy sahifa`,
      link: '/',
    },
    {
      label: t`Restoran`,
      link: `/restourant/${id}`,
    },
  ]

  if (isLoading) return <AppLoader />
  if (!isSuccess) return null

  return (
    <PageMotion>
      <Box mb={6}>
        <AppBreadCrumb items={breadCrumb} />
      </Box>
      <Restourant {...data} />
      <Divider my={8} />
      <Box>
        <Text fontWeight={700} fontSize={'3xl'}>{t`Menyu`}</Text>
        <Box
          overflow={'scroll'}
          css={{
            '&::-webkit-scrollbar': {
              width: '0px',
            },
          }}
        >
          <HStack minWidth={'min-content'} spacing={3} pt={6}>
            {data.categories.map((v) => (
              <Button
                borderColor="premium_red.900"
                color="premium_red.900"
                borderWidth={'2px'}
                fontWeight={500}
                variant={'outline'}
              >
                {v.title}
              </Button>
            ))}
          </HStack>
        </Box>
      </Box>
      <Box w="full" mt={16}>
        <Flex justifyContent={'space-between'} w="full">
          <Text fontWeight={700} fontSize={'3xl'}>{t`Saralangan taomlar`}</Text>
          <Button size={'lg'} color="premium_red.1000" variant={'link'}>{t`Barchasi`}</Button>
        </Flex>
        <Box py={6}>
          <Carousel>
            {new Array(10).fill(null).map((v, index) => (
              <Carousel.Item>
                <MealCard
                  image="http://45.12.214.152/media/418513-svetik.2022-04-18.06-34-07.jpg"
                  name="Burger"
                  onAdd={() => {}}
                  price={25000}
                  key={index}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Box>
      </Box>
      <Box w="full" mt={16}>
        <Flex justifyContent={'space-between'} w="full">
          <Text fontWeight={700} fontSize={'3xl'}>{t`Xaridlarim`}</Text>
          <Button size={'lg'} color="premium_red.1000" variant={'link'}>{t`Barchasi`}</Button>
        </Flex>
        <Box py={6}>
          <Carousel>
            {new Array(10).fill(null).map((v, index) => (
              <Carousel.Item>
                <MealCard
                  image="http://45.12.214.152/media/418513-svetik.2022-04-18.06-34-07.jpg"
                  name="Burger"
                  onAdd={() => {}}
                  price={25000}
                  key={index}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Box>
      </Box>
      <Box w="full" mt={16}>
        <Flex justifyContent={'space-between'} w="full">
          <Text fontWeight={700} fontSize={'3xl'}>{t`Birinchi taom`}</Text>
          <Button size={'lg'} color="premium_red.1000" variant={'link'}>{t`Barchasi`}</Button>
        </Flex>
        <SimpleGrid columns={[null, 1, 2, 3, 4]} spacing={6} py={6}>
          {new Array(10).fill(null).map((v, index) => (
            <Box>
              <MealCard
                image="http://45.12.214.152/media/418513-svetik.2022-04-18.06-34-07.jpg"
                name="Burger"
                onAdd={() => {}}
                price={25000}
                key={index}
              />
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </PageMotion>
  )
}
