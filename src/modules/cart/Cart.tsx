import { Box, Button, Container, Divider, Text, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { CarIcon, CookIcon } from '../../img/icons/Icons'
import { totalMealCostSelector, useCart } from '../../stores/useCart'
import { AppBreadCrumb, BreadCrumb } from '../../ui/AppComponents/AppBreadCrumb'
import { AppBreadCrumbItem } from '../../ui/AppComponents/AppBreadCrumb/AppBreadCrumbItem'
import { MealListItem } from '../../ui/cards/MealListItem'
import { ServiceDetails } from '../../ui/cards/ServiceDetails'
import { TabButton } from '../../ui/features/TabButton'

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
  } = useCart()

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

  return (
    <>
      <Box py={6}>
        <AppBreadCrumb items={breadCrumb} />
      </Box>
      <Container maxW={'container.sm'}>
        <VStack mt={4} mb={20} spacing={6} w={'full'} alignItems="flex-start">
          <Text color={'premium_dark.1000'} fontWeight={700} fontSize={'3xl'}>{t`Savat`}</Text>
          <TabButton
            leftTab={t`Yetkazib bering`}
            rightTab={t`O’zim olib ketaman`}
            active={type === 'delivery' ? 'left' : 'rigth'}
            leftHandle={() => changeType('delivery')}
            rightHandle={() => changeType('pickup')}
          />
          <VStack spacing={2} py={2} w="full">
            {meals.map((v) => (
              <MealListItem
                imgSrc={v.image}
                price={v.price}
                mealName={v.name}
                quantity={v.quantity}
                handleDecrease={() => decreaseMealQuantity(v.mealId)}
                handleIncrease={() => increaseMealQuantity(v.mealId)}
                type="cart"
              />
            ))}
          </VStack>
          <VStack spacing={2} py={4} w="full">
            <ServiceDetails
              icon={<CookIcon />}
              title="Tayyorlanish o’rtacha vaqti:"
              value={`${preparingTime}`}
            />
            <Divider />
            <ServiceDetails
              icon={<CarIcon />}
              title="Yetkazib berish:"
              value={`${deliveryTime} / ${deliveryPrice}`}
            />
          </VStack>
          <Button
            size={'lg'}
            fontSize="lg"
            fontWeight={500}
            w="full"
            shadow={'2xl'}
            justifyContent={'space-between'}
          >
            <Text>{t`Tasdiqlash`}</Text>
            <Text>{totalCost}</Text>
          </Button>
        </VStack>
      </Container>
    </>
  )
}

export default Cart
