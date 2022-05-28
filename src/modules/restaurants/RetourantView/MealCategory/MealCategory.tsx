import { Box, Flex, Button, SimpleGrid, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { useRouter } from 'next/router'
import { useMealListQuery } from '../../../../api/meal/useMealListQuery'
import { Loader } from '../../../../ui/AppComponents/Loader'
import { MealCard } from '../../../../ui/cards/MealCard'
import { useRestaurantViewContext } from '../RestourantView'

interface MealCategoryProps {
  id: number
  title: string
  restaurantId: number
}

export const MealCategory: React.FC<MealCategoryProps> = ({ id, title, restaurantId }) => {
  const { data, isLoading, isSuccess } = useMealListQuery({
    category: id,
    restaurant: restaurantId,
  })

  const router = useRouter()

  const { onAddMeal } = useRestaurantViewContext()

  if (isLoading) return <Loader />
  if (!isSuccess || data.results.length === 0) return null

  return (
    <Box id={id + ''} w="full" mt={16}>
      <Flex justifyContent={'space-between'} w="full">
        <Text fontWeight={700} fontSize={'3xl'}>
          {title}
        </Text>
        {/* <Button onClick={()=>router.push('')} size={'lg'} color="premium_red.1000" variant={'link'}>{t`Barchasi`}</Button> */}
      </Flex>
      <SimpleGrid columns={[null, 1, 2, 3, 4]} spacing={6} py={6}>
        {data.results.map((v, index) => (
          <Box>
            <MealCard
              image={v.image}
              name={v.title}
              onAdd={() => onAddMeal(v)}
              price={+v.meal_types?.[0]?.price!}
              key={index}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}
