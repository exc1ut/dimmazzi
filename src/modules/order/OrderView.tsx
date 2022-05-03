import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Container, VStack, Button, Divider, HStack, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { data } from 'msw/lib/types/context'
import { useRouter } from 'next/router'
import { type } from 'ramda'
import { useTranslation } from 'react-i18next'
import { CookIcon, CarIcon, MoneyIcon } from '../../img/icons/Icons'
import { useCart } from '../../stores/useCart'
import { AppBreadCrumb, BreadCrumb } from '../../ui/AppComponents/AppBreadCrumb'
import { MealListItem } from '../../ui/cards/MealListItem'
import { PaymentOptions } from '../../ui/cards/PaymentOptions'
import { ServiceDetails } from '../../ui/cards/ServiceDetails'
import { OrderProgress } from '../../ui/features/OrderProgress'
import { DeliveryAddress } from '../../ui/inputs/DeliveryAddress'

export default () => {
  const { query } = useRouter()
  const { id } = query
  const { meals } = useCart()
  const { t } = useTranslation()

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

  return (
    <>
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
          >{t`savatga qaytish`}</Button>
          <Text fontSize={'3xl'} fontWeight={700}>{`Buyurtma ID: ${id}`}</Text>
          <Text pt={4} color={'premium_dark.600'}>
            {t`Yetkazib berish`}:
          </Text>
          <Divider />
          <Box pt={3}>
            <OrderProgress />
          </Box>
          <Text pt={4} color={'premium_dark.600'}>
            {t`Buyurtma ma’lumotlari`}:
          </Text>
          <Divider />

          <VStack py={4} spacing={2} w={'full'}>
            {meals.map((v) => (
              <MealListItem
                type="order"
                imgSrc={v.image}
                mealName={v.name}
                price={v.price}
                quantity={v.quantity}
                key={v.mealId}
              />
            ))}
          </VStack>
          <VStack spacing={2} w={'full'}>
            <ServiceDetails
              icon={<CookIcon />}
              title={t`Tayyorlanish o’rtacha vaqti`}
              value={'40 daqiqa'}
            />
            <Divider />
            <ServiceDetails icon={<MoneyIcon />} title={t`Taom narxi`} value={`234`} />
            <ServiceDetails
              icon={<MoneyIcon />}
              title={t`Yetkazib berish narxi`}
              value={`234234`}
            />
            <Divider />
            <ServiceDetails icon={<MoneyIcon />} title={t`Umumiy to’lov`} value={`234234`} />
          </VStack>
        </VStack>
      </Container>
    </>
  )
}
