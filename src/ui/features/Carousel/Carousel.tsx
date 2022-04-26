import { RestourantCard, RestourantCardProps } from '../../cards/RestourantCard/RestourantCard'
import { Box, Button, Flex, HStack, useMediaQuery } from '@chakra-ui/react'
import * as React from 'react'
import Slider from 'react-slick'
import { CustomArrow } from './CustomArrow'
import { LeftArrow, RightArrow } from '../../../img/icons/Icons'
import { Settings } from 'http2'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type CarouselProps = {}

export const Carousel: React.FC<CarouselProps> = ({ }) => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [isLessThanMd, isLessThanLg] = useMediaQuery(['(max-width: 760px)', '(max-width: 960px)'])
  const restProps: RestourantCardProps = {
    image:
      'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
    isLiked: true,
    name: 'MaxWay',
    star: 3.8,
    state: 'open',
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

  const settings: Settings = React.useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: !isLessThanLg && <CustomArrow aria-label="rightArrow" direction="right" />,
      prevArrow: !isLessThanLg && <CustomArrow aria-label="leftArrow" direction="left" />,
      responsive: [
        {
          breakpoint: 1537,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 961,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    [isLessThanLg]
  )

  return (
    <Box w={'full'} px={{ sm: 0, md: 6 }}>
      <Slider {...settings}>
        {cards.map((item, index) => (
          <Box py={4} px={{ sm: 0, md: 4 }}>
            <RestourantCard key={index} {...restProps} />
          </Box>
        ))}
      </Slider>
    </Box>
  )
}
