import { CommonProps, ConditionalProps, RestourantCard } from "../../cards/RestourantCard/RestourantCard";
import { Flex, HStack } from "@chakra-ui/react";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type CarouselProps = {}

export const Carousel: React.FC<CarouselProps> = ({ }) => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const restProps: CommonProps & ConditionalProps = {
    image: 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
    isLiked: true,
    name: 'MaxWay',
    star: 3.8,
    state: "open",
    distance: 2.47,
    isDeliverable: true,
    cost: 8000,
    time: 12,
  }
  return (
    <Flex w="1350px" overflow="scroll" wrap="nowrap">
      {cards.map(item => {
        return <RestourantCard {...restProps} />
      })}
    </Flex>
  );
};