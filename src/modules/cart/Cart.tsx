import { useAuth } from '@/stores/useAuth'
import Empty from '@/ui/features/Status/Empty'
import { Box, Button, Container, Divider, Text, VStack } from '@chakra-ui/react'
import { data } from 'msw/lib/types/context'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { IOrderCreate, IOrderProduct } from '../../api/order/useOrderCreateMutation'
import { CarIcon, CookIcon } from '../../img/icons/Icons'
import { totalMealCostSelector, useCart } from '../../stores/useCart'
import { AppBreadCrumb, BreadCrumb } from '../../ui/AppComponents/AppBreadCrumb'
import { AppBreadCrumbItem } from '../../ui/AppComponents/AppBreadCrumb/AppBreadCrumbItem'
import { MealListItem } from '../../ui/cards/MealListItem'
import { ServiceDetails } from '../../ui/cards/ServiceDetails'
import { TabButton } from '../../ui/features/TabButton'
import { PageMotion } from '../../ui/PageMotion'
import { getTime } from '../../utils/getTime'
import { AuthModal } from '../auth/auth/AuthModal'
import { useModal } from '@ebay/nice-modal-react'
import { useAddressQuery } from '@/api/address/useAddressQuery'
import { useLocation } from '@/stores/useLocation'
import { Map } from '../../ui/Map'
interface CartProps {}

export const Cart: React.FC<CartProps> = ({}) => {
  const { t } = useTranslation()
  const {
    deliveryPrice,
    meals,
    deliveryTime,
    type,
    preparingTime,
    changeType,
    decreaseMealQuantity,
    increaseMealQuantity,
    removeMeal,
  } = useCart()
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const authModal = useModal(AuthModal)
  const { data } = useAddressQuery()
  const { setStore } = useLocation()
  const locationModal = useModal(Map)

  const handleAuth = async () => {
    await authModal.show()
    const lastAddress = data?.results?.at(-1)
    if (lastAddress) {
      setStore((state) => ({ ...state, ...lastAddress }))
    } else {
      await locationModal.show()
      // setMapIsOpen(true)
    }
    router.push('/order/create?orderId=2')
  }

  const totalCost = useCart(totalMealCostSelector)

  const breadCrumb: BreadCrumb[] = [
    {
      label: t`Home`,
      link: '/',
    },
    {
      label: t`Cart`,
      link: '/cart',
    },
  ]

  const handleSubmit = () => {
    if (isAuthenticated) router.push('/order/create?orderId=2')
    else handleAuth()
  }

  return (
    <PageMotion>
      <Box>
        <AppBreadCrumb items={breadCrumb} />
      </Box>
      <Container maxW={'container.sm'}>
        <VStack mt={4} mb={20} spacing={6} w={'full'} alignItems="flex-start">
          <Text color={'premium_dark.1000'} fontWeight={700} fontSize={'3xl'}>{t`Savat`}</Text>
          {meals.length && (
            <TabButton
              leftTab={t`Yetkazib bering`}
              rightTab={t`O’zim olib ketaman`}
              active={type === 'delivery' ? 'left' : 'rigth'}
              leftHandle={() => changeType('delivery')}
              rightHandle={() => changeType('pick_up')}
            />
          )}

          <VStack spacing={2} py={2} w="full">
            {!meals.length ? (
              <Empty />
            ) : (
              meals.map((v) => (
                <MealListItem
                  imgSrc={v.image}
                  price={v.total_price}
                  mealName={v.title}
                  quantity={v.quantity}
                  handleDecrease={() => decreaseMealQuantity(v.id)}
                  handleIncrease={() => increaseMealQuantity(v.id)}
                  handleDelete={() => removeMeal(v.id)}
                  type="cart"
                />
              ))
            )}
          </VStack>
          {meals.length && (
            <>
              {isAuthenticated && (
                <VStack spacing={2} py={4} w="full">
                  <ServiceDetails
                    icon={<CookIcon />}
                    title="Tayyorlanish o’rtacha vaqti:"
                    value={getTime(preparingTime)}
                  />
                  <Divider />
                  {type === 'delivery' && (
                    <ServiceDetails
                      icon={<CarIcon />}
                      title="Yetkazib berish:"
                      value={`${deliveryTime} / ${deliveryPrice}`}
                    />
                  )}
                </VStack>
              )}
              <Button
                size={'lg'}
                fontSize="lg"
                fontWeight={500}
                w="full"
                shadow={'2xl'}
                justifyContent={'space-between'}
                onClick={handleSubmit}
              >
                <Text color={'white'}>{t`Tasdiqlash`}</Text>
                <Text color={'white'}>{totalCost}</Text>
              </Button>{' '}
            </>
          )}
        </VStack>
      </Container>
    </PageMotion>
  )
}

export default Cart
