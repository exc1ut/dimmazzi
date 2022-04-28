import { HomeSearch } from "@/ui/features/HomeSearch";
import { VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
  return (<VStack marginTop="1.5rem">
    <HomeSearch />
  </VStack>);
}

export default Home;