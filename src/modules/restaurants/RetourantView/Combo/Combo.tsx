import { Box, Flex, Button, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import { useRouter } from 'next/router'
import { SwiperSlide } from 'swiper/react'
import { useMealComboList } from '../../../../api/meal/useMealComboList'
import { Loader } from '../../../../ui/AppComponents/Loader'
import { MealCard } from '../../../../ui/cards/MealCard'
import { Carousel } from '../../../../ui/features/Carousel'

interface ComboProps {}

export const Combo: React.FC<ComboProps> = ({}) => {
  const router = useRouter()
  const { id } = router.query

  const comboList = useMealComboList(id as string)

  if (comboList.isLoading) return <Loader />
  if (!comboList.isSuccess) return null

  return (
    <Box w="full" mt={16}>
      <Flex justifyContent={'space-between'} w="full">
        <Text fontWeight={700} fontSize={'3xl'}>{t`Saralangan taomlar`}</Text>
        <Button size={'lg'} color="premium_red.1000" variant={'link'}>{t`Barchasi`}</Button>
      </Flex>
      <Box py={6}>
        <Carousel>
          {comboList.data &&
            comboList.data.results.map((v, index) => (
              <SwiperSlide>
                <Box py={1.5} px={1.5}>
                  <MealCard
                    image={v.thumbnail}
                    name={v.title}
                    onAdd={() => {}}
                    price={+v.price}
                    key={index}
                  />
                </Box>
              </SwiperSlide>
            ))}
        </Carousel>
      </Box>
    </Box>
  )
}
