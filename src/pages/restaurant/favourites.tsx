import FavouriteRestaurant from "@/modules/restaurants/favourite";
import { Container } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface FavouriteRestaurantPageProps {

}

const FavouriteRestaurantPage: FunctionComponent<FavouriteRestaurantPageProps> = () => {
  return (
    <Container maxW="container.xl">
      <FavouriteRestaurant />
    </Container>
  );
}

export default FavouriteRestaurantPage;