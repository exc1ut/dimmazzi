import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Container, VStack, Button, Divider, HStack, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { data } from 'msw/lib/types/context'
import { useRouter } from 'next/router'
import { type } from 'ramda'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useOrderDetailQuery } from '../../api/order/useOrderDetailQuery'
import { CookIcon, CarIcon, MoneyIcon } from '../../img/icons/Icons'
import { useCart } from '../../stores/useCart'
import { AppBreadCrumb, BreadCrumb } from '../../ui/AppComponents/AppBreadCrumb'
import { AppLoader } from '../../ui/AppComponents/AppLoader'
import { MealListItem } from '../../ui/cards/MealListItem'
import { PaymentOptions } from '../../ui/cards/PaymentOptions'
import { ServiceDetails } from '../../ui/cards/ServiceDetails'
import { OrderProgress } from '../../ui/features/OrderProgress'
import { DeliveryAddress } from '../../ui/inputs/DeliveryAddress'
import { PageMotion } from '../../ui/PageMotion'

export default () => {
  const { query, push } = useRouter()
  const { id } = query
  const { meals } = useCart()
  const { t } = useTranslation()
  const { data, isLoading, isSuccess } = useOrderDetailQuery(+id!)

  const breadCrumb: BreadCrumb[] = [
    {
      label: t`Asosiy sahifa`,
      link: '/',
    },
    {
      label: t`Buyurtma`,
      link: '/order',
    },
  ]

  if (isLoading) return <AppLoader />
  if (!isSuccess) return null

  const getStatus = () => {
    switch (data.status) {
      case 'pending':
        return 0
      case 'processing':
        return 1
      case 'ready':
        return 2
      case 'finished':
        return 3
    }
  }

  return (
    <PageMotion>
      <Box>
        <AppBreadCrumb items={breadCrumb} />
      </Box>
      <Container maxW={'container.sm'}>
        <VStack py={8} spacing={2} justifyContent={'flex-start'} alignItems="flex-start" w="full">
          <Button
            variant={'ghost'}
            color="premium_blue.1000"
            size={'sm'}
            leftIcon={<ChevronLeftIcon boxSize={'1.5em'} />}
            textTransform="uppercase"
            justifyContent={'flex-start'}
            pl={0}
            onClick={() => push('/cart')}
          >{t`savatga qaytish`}</Button>
          <Text fontSize={'3xl'} fontWeight={700}>{`Buyurtma ID: ${id}`}</Text>
          <Text pt={4} color={'premium_dark.600'}>
            {t`Yetkazib berish`}:
          </Text>
          <Divider />
          <Box pt={3}>
            <OrderProgress activeStep={getStatus()} />
          </Box>
          <Text pt={4} color={'premium_dark.600'}>
            {t`Buyurtma ma’lumotlari`}:
          </Text>
          <Divider />

          <VStack py={4} spacing={2} w={'full'}>
            {data.products.map((v) => (
              <MealListItem
                type="order"
                imgSrc={v.meal.image}
                mealName={v.meal.name}
                price={v.price}
                quantity={v.quantity}
                key={v.id}
              />
            ))}
          </VStack>
          <VStack spacing={2} w={'full'}>
            <ServiceDetails
              icon={<CookIcon />}
              title={t`Tayyorlanish o’rtacha vaqti`}
              value={data.preparation_time + ''}
            />
            <Divider />
            <ServiceDetails
              icon={<MoneyIcon />}
              title={t`Taom narxi`}
              value={data.meal_total_price}
            />
            <ServiceDetails
              icon={<MoneyIcon />}
              title={t`Yetkazib berish narxi`}
              value={data.delivery_price + ''}
            />
            <Divider />
            <ServiceDetails
              icon={<MoneyIcon />}
              title={t`Umumiy to’lov`}
              value={data.total_price}
            />
          </VStack>
        </VStack>
      </Container>
    </PageMotion>
  )
}
