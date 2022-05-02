import { useRestaurantDetailQuery } from "@/api/restaurant/useRestaurantDetailQuery";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface SingleRestaurantProps {

}

const SingleRestaurant: FunctionComponent<SingleRestaurantProps> = () => {
  const { query } = useRouter();
  const { t } = useTranslation();
  const details = useRestaurantDetailQuery(["restaurant"], { id: query.id ));

  return ( 
    
   );
}

export default SingleRestaurant;