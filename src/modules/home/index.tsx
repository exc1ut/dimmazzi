import { Carousel } from "../../ui/features/Carousel/";
import { HomeSearch } from "../../ui/features/HomeSearch";
import { Box, Flex, Heading, VStack, Text, SimpleGrid, Skeleton, HStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useRestaurantListQuery } from "../../api/restaurant/useRestaurantListQuery";
import { RestourantCard } from "../../ui/cards/RestourantCard";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
  const { t } = useTranslation();
  const restaurantList = useRestaurantListQuery(["restList"], { longtitude: 4.98541, latitude: 5.58965 }, {
    onSuccess: (data: any) => {
      console.log(data.data.results, " results");

    },
    retry: 0
  })


  return (<VStack marginTop="1.5rem" spacing={14} marginBottom="1.5rem">
    <HomeSearch />

    <VStack w="106%" align="start" spacing={14}>

      <VStack w="100%">
        <Flex alignSelf="center" w="94%" justify="space-between">
          <Heading fontSize="1.5rem" lineHeight="2rem">{t`Favourite_restaurants`}</Heading>
          <Text fontSize="1.25rem" color="premium_red.1000"><Link href="/restaurnat/favourites">{t`all`}</Link> </Text>
        </Flex>
        <Carousel />
      </VStack>




      <VStack w="100%">
        <Flex alignSelf="center" w={["100%", "100%", "94%"]} justify="space-between">
          <Heading fontSize="1.5rem" lineHeight="2rem">{t`Recomended Restaunrants`}</Heading>
          <Text fontSize="1.25rem" color="premium_red.1000"><Link href="/restaurnat/favourites">{t`all`}</Link> </Text>
        </Flex>
        <Carousel />
      </VStack>

    </VStack>
    <VStack align="start" w="100%" spacing={6} >
      <Heading fontSize="1.5rem" lineHeight="2rem">{t`All Restaurants`}</Heading>
      {!restaurantList.error ? <SimpleGrid columns={[1, 2, 3]} spacing={6} w="100%">
        {!restaurantList.isLoading ? restaurantList.data?.data.results.map((res: any) => {
          return (<RestourantCard image={res.background.file} isLiked={res.is_favourite} name={res.title} star={res.rating}
            distance={res.distance} state={res.is_open ? "open" : "closed"} isDeliverable={res.has_delivery} cost={res.additional.approximate_delivery_price}
            time={res.additional.approximate_delivery_time} />)

        }) : <HStack spacing={6} w="105%">
          <Skeleton w="25rem" h="20rem" borderRadius=".5rem" />
          <Skeleton w="25rem" h="20rem" borderRadius=".5rem" />
          <Skeleton w="25rem" h="20rem" borderRadius=".5rem" />

        </HStack>}
      </SimpleGrid> : !restaurantList.data?.data.results.length ? <Heading color="premium_red.1000" alignSelf="center">{t`No Restaurant Found`}</Heading> : <Heading color="premium_red.1000" alignSelf="center">{t`Something Went Wrong`} </Heading>
      }

    </VStack>
  </VStack>);
}

export default Home;