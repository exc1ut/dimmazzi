import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IAddress } from '../../api/address/IAddress.interface'
import { useAddressQuery } from '../../api/address/useAddressQuery'
import { CarIcon, CookIcon, MoneyIcon } from '../../img/icons/Icons'
import { totalMealCostSelector, useCart } from '../../stores/useCart'
import { AppBreadCrumb, BreadCrumb } from '../../ui/AppComponents/AppBreadCrumb'
import { AppLoader } from '../../ui/AppComponents/AppLoader'
import { MealListItem } from '../../ui/cards/MealListItem'
import { PaymentOptions } from '../../ui/cards/PaymentOptions'
import { ServiceDetails } from '../../ui/cards/ServiceDetails'
import { DeliveryAddress } from '../../ui/inputs/DeliveryAddress'
import { Map } from '../../ui/Map'
import { StatusAccepted } from './StatusAccepted'

export default ({}) => {
  const [paymentOption, setPaymentOption] = useState<'credit' | 'cash'>('credit')
  const { t } = useTranslation()
  const { query } = useRouter()
  const { meals, type } = useCart()
  const totalPrice = useCart(totalMealCostSelector)
  const { data, isLoading, isSuccess } = useAddressQuery()
  const modal = useModal(Map)
  const statusModal = useModal(StatusAccepted)
  const { orderId } = query

  const breadCrumb: BreadCrumb[] = [
    {
      label: t`Asosiy sahifa`,
      link: '/',
    },
    {
      label: t`Savat`,
      link: '/cart',
    },
    {
      label: t`Buyurtma`,
      link: '/order/create',
    },
  ]

  if (isLoading) return <AppLoader />
  if (!isSuccess) return null

  const onAddressChange = (address: IAddress) => {
    console.log(address)
  }

  const onAddressAdd = () => {
    modal.show()
  }

  const onSubmit = () => {
    statusModal.show()
  }

  return (
    <>
      <Box>
        <AppBreadCrumb items={breadCrumb} />
      </Box>
      <Container maxW={'container.sm'}>
        <VStack py={8} spacing={6} justifyContent={'flex-start'} alignItems="flex-start" w="full">
          <Button
            variant={'ghost'}
            color="premium_blue.1000"
            size={'sm'}
            leftIcon={<ChevronLeftIcon boxSize={'1.5em'} />}
            textTransform="uppercase"
            justifyContent={'flex-start'}
            pl={0}
          >{t`savatga qaytish`}</Button>
          <Text fontSize={'3xl'} fontWeight={700}>{`Buyurtma ID: ${orderId}`}</Text>

          <VStack spacing={6} w={'full'}>
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
          <VStack py={4} alignItems={'flex-start'} spacing={6} w="full">
            <Text fontWeight={700} fontSize={'xl'}>
              {t`Адрес доставки`}:
            </Text>
            <DeliveryAddress
              addresses={data.results}
              onAddressChange={onAddressChange}
              onAddressAdd={onAddressAdd}
            />
          </VStack>
          <VStack spacing={4} w={'full'}>
            <ServiceDetails
              icon={<CookIcon />}
              title={t`Tayyorlanish o’rtacha vaqti`}
              value={'40 daqiqa'}
            />
            {type === 'delivery' && (
              <ServiceDetails
                icon={<CarIcon />}
                title={t`Yetkazib berish`}
                value={'12 daqiqada / 8,000'}
              />
            )}
            <Divider />
            <ServiceDetails icon={<MoneyIcon />} title={t`Taom narxi`} value={`${totalPrice}`} />
            <ServiceDetails
              icon={<MoneyIcon />}
              title={t`Yetkazib berish narxi`}
              value={`${totalPrice}`}
            />
            <Divider />
            <ServiceDetails icon={<MoneyIcon />} title={t`Umumiy to’lov`} value={`${totalPrice}`} />
          </VStack>
          <HStack py={4} spacing={6}>
            <PaymentOptions
              onClick={() => setPaymentOption('credit')}
              isActive={paymentOption === 'credit'}
              description={t`To’lov O’zbek so’mida
							kurer tomonidan 
							qabul qilinadi.`}
              icon={MoneyIcon}
              title={t`Naqt to’layman`}
            />
            <PaymentOptions
              onClick={() => setPaymentOption('cash')}
              isActive={paymentOption === 'cash'}
              description={t`Toʻlov UzCard bank kartalari orqali qabul qilinadi.`}
              icon={MoneyIcon}
              title={t`Kartada to’layman`}
            />
          </HStack>

          <Box w={'full'} py={6}>
            <Button
              justifyContent={'space-between'}
              size="lg"
              fontWeight={500}
              w="full"
              shadow={'lg'}
              onClick={onSubmit}
            >
              <Text color="white">{t`Buyurtma qilish`}</Text>
              <Text color="white">{totalPrice}</Text>
            </Button>
          </Box>
        </VStack>
      </Container>
    </>
  )
}
