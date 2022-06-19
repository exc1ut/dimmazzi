import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { useMealListQuery } from '../../../../api/meal/useMealListQuery'
import { RestaurantSkeleton } from '../../../../ui/AppComponents/RestaurantSkeleton'
import { MealCard } from '../../../../ui/cards/MealCard'
import { useRestaurantViewContext } from '../RestourantView'

interface MealCategoryProps {
  id: number
  title: string
  restaurantId: number
}

export const MealCategory: React.FC<MealCategoryProps> = ({ id, title, restaurantId }) => {
  const [ref, visible, entry] = useInView({
    threshold: 1.0,
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px',
  })
  const { data,isLoading,isSuccess } = useMealListQuery({
    category: id,
    restaurant: restaurantId,
  })

  const { onAddMeal } = useRestaurantViewContext()

  // if (isLoading) return <Loader />
  // if (!isSuccess || data.results.length === 0) return null

  return (
    <Box ref={ref} id={id + ''} w="full" mt={16}>
      <Flex justifyContent={'space-between'} w="full">
        <Text fontWeight={700} fontSize={'3xl'}>
          {title}
        </Text>
        {/* <Button onClick={()=>router.push('')} size={'lg'} color="premium_red.1000" variant={'link'}>{t`Barchasi`}</Button> */}
      </Flex>
      {/* {!visible ? null : ( */}
      <SimpleGrid columns={[null, 1, 2, 3, 4]} spacing={6} py={6}>
			 {isLoading || !isSuccess ?<RestaurantSkeleton skeletonNumber={data?.results.length} />:data.results.map((v, index) => (
            <Box>
              <MealCard
                image={v.image}
                name={v.title}
                onAdd={() => onAddMeal(v)}
                price={+v.meal_types?.[0]?.price!}
                key={index}
              />
            </Box>
          )) } 

      </SimpleGrid>
      {/* )} */}
    </Box>
  )
}
