import { CommonProps, ConditionalProps, RestourantCard } from "../../cards/RestourantCard/RestourantCard";
import * as React from "react";
import Slider from "react-slick"
import { Box, Input, Textarea } from "@chakra-ui/react";

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
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <div>prev</div>,
    nextArrow: <div>next</div>,

  }
  return (
    <Box width="400px" height="300px">
      <Slider {...settings}>
        <div>rsdf</div>
        <div>rsdf</div>
        <div>rsdf</div>
        <div>rsdf</div>
      </Slider>

    </Box>

  );
};