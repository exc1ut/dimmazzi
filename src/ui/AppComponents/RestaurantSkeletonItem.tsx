import { Stack, Skeleton } from '@chakra-ui/react'

interface RestaurantSkeletonItemProps {}

export const RestaurantSkeletonItem: React.FC<RestaurantSkeletonItemProps> = ({}) => {
  return (
    <Stack w={'full'}>
      <Skeleton height="200px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  )
}
