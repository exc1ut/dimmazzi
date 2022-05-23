import { Box, Button, Divider, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { IMeal } from '../../../api/meal/IMeal.interface'
import { useMealComboList } from '../../../api/meal/useMealComboList'
import { useRestourantDetail } from '../../../api/restourant/useRestourantDetail'
import { useCart } from '../../../stores/useCart'
import { AppBreadCrumb, BreadCrumb } from '../../../ui/AppComponents/AppBreadCrumb'
import { AppLoader } from '../../../ui/AppComponents/AppLoader'
import { MealCard } from '../../../ui/cards/MealCard'
import { MealModalCard } from '../../../ui/cards/MealModalCard'
import { MealModalDto } from '../../../ui/cards/MealModalCard/modal.dto'
import { PageMotion } from '../../../ui/PageMotion'
import { Restourant } from './Restourant/Restourant'
import { Menu } from './Menu/Menu'
import { MealCategory } from './MealCategory/MealCategory'
import { createContext, useContext } from 'react'

interface IRestaurantViewContext {
  onAddMeal: (meal: IMeal) => void
}

const RestaurantViewContext = createContext<IRestaurantViewContext | undefined>(undefined)

export const useRestaurantViewContext = () => {
  const c = useContext(RestaurantViewContext)
  if (c === undefined) {
    throw new Error('useRestaurantViewContext must be inside a Provider with a value')
  }
  return c
}

export default () => {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, isSuccess } = useRestourantDetail(+id!)
  const { t } = useTranslation()
  const modal = useModal(MealModalCard)
  const { addMeal } = useCart()

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

  const handleAddMeal = async (meal: IMeal) => {
    const response = (await modal.show({
      image: meal.image,
      title: meal.title,
      types: meal.meal_types,
    })) as MealModalDto
    if (response) {
      addMeal(
        {
          category: meal.category,
          id: meal.id,
          image: meal.image,
          meal_type: response.type,
          quantity: response.quantity,
          title: meal.title,
          total_price: response.totalPrice,
        },
        {
          deliveryPrice: data.additional.approximate_delivery_price,
          deliveryTime: data.additional.approximate_delivery_time,
          preparingTime: data.average_cooking_time,
          restourantId: data.id,
        }
      )
    }
  }

  return (
    <RestaurantViewContext.Provider value={{ onAddMeal: handleAddMeal }}>
      <PageMotion>
        <Box mb={6}>
          <AppBreadCrumb items={breadCrumb} />
        </Box>
        <Restourant {...data} />
        <Divider my={8} />
        <Menu />
        {data.categories.map((v) => (
          <MealCategory id={v.id} title={v.title} restaurantId={+id!} />
        ))}
      </PageMotion>
    </RestaurantViewContext.Provider>
  )
}
