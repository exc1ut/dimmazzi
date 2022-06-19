import { Skeleton, SkeletonCircle, SkeletonText, Stack, VStack } from '@chakra-ui/react'
import { RestaurantSkeletonItem } from './RestaurantSkeletonItem'
interface RestaurantSkeletonProps {
  skeletonNumber: number
}

export const RestaurantSkeleton: React.FC<RestaurantSkeletonProps> = ({ skeletonNumber }) => {
  return (
    <>
      {new Array(skeletonNumber).fill(null).map(() => (
        <RestaurantSkeletonItem />
      ))}
    </>
  )
}
