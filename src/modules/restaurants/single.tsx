import { useRestaurantDetailQuery } from "@/api/restaurant/useRestaurantDetailQuery";
import { Container } from "@chakra-ui/react";
import { Contains } from "class-validator";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface SingleRestaurantProps {

}

const SingleRestaurant: FunctionComponent<SingleRestaurantProps> = () => {
  const { query }: any = useRouter();
  const { t } = useTranslation();
  const details = useRestaurantDetailQuery(["restaurant"], parseInt(query?.id))
  const restaurantProps = {

  }
  return (
    <Container maxW={'container.xl'}>

    </Container>
  );
}

export default SingleRestaurant;