import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { undefined } from 'zod'
import { IAddress } from '../../api/address/IAddress.interface'
import { useAddressQuery } from '../../api/address/useAddressQuery'
import {
  IOrderProduct,
  IOrderCreate,
  useOrderCreateMutation,
} from '../../api/order/useOrderCreateMutation'
import { CarIcon, CookIcon, MoneyIcon } from '../../img/icons/Icons'
import { totalMealCostSelector, useCart } from '../../stores/useCart'
import { AppBreadCrumb, BreadCrumb } from '../../ui/AppComponents/AppBreadCrumb'
import { AppLoader } from '../../ui/AppComponents/AppLoader'
import { MealListItem } from '../../ui/cards/MealListItem'
import { PaymentOptions } from '../../ui/cards/PaymentOptions'
import { ServiceDetails } from '../../ui/cards/ServiceDetails'
import { DeliveryAddress } from '../../ui/inputs/DeliveryAddress'
import { Map } from '../../ui/Map'
import address from '../address'
import { StatusAccepted } from './StatusAccepted'

export default ({}) => {
  const [paymentOption, setPaymentOption] = useState<'pay_me_uz' | 'cash' | 'click_uz'>('pay_me_uz')
  const [address, setAddress] = useState<IAddress>()
  const { t } = useTranslation()
  const { query } = useRouter()
  const { meals, type, deliveryPrice, deliveryTime, preparingTime, reset } = useCart()
  const totalPrice = useCart(totalMealCostSelector)
  const { data, isLoading, isSuccess } = useAddressQuery()
  const modal = useModal(Map)
  const statusModal = useModal(StatusAccepted)
  const mutation = useOrderCreateMutation()
  const { orderId } = query

  useEffect(() => {
    setAddress(data?.results?.[0])
  }, [data])

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
    setAddress(address)
  }

  const onAddressAdd = () => {
    modal.show()
  }

  const onSubmit = () => {
    if (type === 'delivery' && !address) return

    const orderProduct: IOrderProduct[] = meals.map((v) => ({
      meal_type: v.meal_type.id,
      price: v.total_price,
      quantity: v.quantity,
      meal: v.id,
      combo: null,
    }))

    const preperationTime = +preparingTime.split(':')?.[1]!

    const dto: IOrderCreate = {
      address: address?.id || 1,
      delivery_price: deliveryPrice,
      delivery_type: type,
      meal_total_price: totalPrice,
      payment_type: paymentOption,
      preparation_time: preperationTime,
      products: orderProduct,
      total_price: deliveryPrice + totalPrice,
    }

    mutation.mutate(dto, {
      onSuccess: async (data) => {
        await statusModal.show({
          order_id: data.data.order_id,
        })
        reset()
      },
    })
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
                mealName={v.title}
                price={v.total_price}
                quantity={v.quantity}
                key={v.id}
              />
            ))}
          </VStack>
          {type === 'delivery' && (
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
          )}

          <VStack spacing={4} w={'full'}>
            <ServiceDetails
              icon={<CookIcon />}
              title={t`Tayyorlanish o’rtacha vaqti`}
              value={'40 daqiqa'}
            />
            {type === 'delivery' && (
              <>
                <ServiceDetails
                  icon={<CarIcon />}
                  title={t`Yetkazib berish`}
                  value={'12 daqiqada / 8,000'}
                />
                <ServiceDetails
                  icon={<MoneyIcon />}
                  title={t`Taom narxi`}
                  value={`${totalPrice}`}
                />
                <ServiceDetails
                  icon={<MoneyIcon />}
                  title={t`Yetkazib berish narxi`}
                  value={`${totalPrice}`}
                />
              </>
            )}
            <Divider />
            <ServiceDetails icon={<MoneyIcon />} title={t`Umumiy to’lov`} value={`${totalPrice}`} />
          </VStack>
          <HStack py={4} spacing={6}>
            <PaymentOptions
              onClick={() => setPaymentOption('pay_me_uz')}
              isActive={paymentOption === 'pay_me_uz'}
              description={t`To’lov O’zbek so’mida
							kurer tomonidan 
							qabul qilinadi.`}
              icon={MoneyIcon}
              title={t`Payme`}
            />
            <PaymentOptions
              onClick={() => setPaymentOption('click_uz')}
              isActive={paymentOption === 'click_uz'}
              description={t`To’lov O’zbek so’mida
							kurer tomonidan 
							qabul qilinadi.`}
              icon={MoneyIcon}
              title={t`Click`}
            />
            <PaymentOptions
              onClick={() => setPaymentOption('cash')}
              isActive={paymentOption === 'cash'}
              description={t`Toʻlov UzCard bank kartalari orqali qabul qilinadi.`}
              icon={MoneyIcon}
              title={t`Naqt to’layman`}
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
