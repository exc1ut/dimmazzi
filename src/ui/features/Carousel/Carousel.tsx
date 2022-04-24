import { CommonProps, ConditionalProps, RestourantCard } from "../../cards/RestourantCard/RestourantCard";
import * as React from "react";
import Slider from "react-slick"
import { Box, Button, Input, position, Textarea } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from "next";
import { LeftArrow, RightArrow } from "../../../img/icons/Icons";
import "./Carousel.css";
// import { RestourantCard } from "../../cards/RestourantCard/RestourantCard";
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
  const slRef: React.MutableRefObject<null> = React.useRef(null);
  const PrevArrow = () => {
    return <Button
      variant="slider_left"
      onClick={() => slRef.current?.slickPrev()}><LeftArrow /></Button >
  }
  const NextArrow = () => {
    return <Button
      variant="slider_right"
      onClick={() => slRef.current?.slickNext()}><RightArrow /></Button >
  }
  const settings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    adaptiveHeight: true,
  }
  return (
    <Box width="1300px" height="400px" padding="1rem 0" marginLeft="100px" marginTop="100px" sx={{ position: "relative" }} >
      <PrevArrow />
      <NextArrow />
      <Slider ref={slRef} {...settings}>
        {cards.map((item, index) => <Box><RestourantCard {...restProps} key={item} /></Box>)}
      </Slider>

    </Box>

  );
};