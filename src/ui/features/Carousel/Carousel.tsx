import { RestourantCard, RestourantCardProps } from '../../cards/RestourantCard/RestourantCard'
import { Box, BoxProps, Flex, HStack, useMediaQuery } from '@chakra-ui/react'
import * as React from 'react'
import Slider, { Settings } from 'react-slick'
import { CustomArrow } from './CustomArrow'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type CarouselProps = {
  children: React.ReactNode
}

function Carousel({ children }: CarouselProps) {
  const [isLessThanMd, isLessThanLg] = useMediaQuery(['(max-width: 760px)', '(max-width: 1280px)'])

  const settings: Settings = React.useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: !isLessThanLg && <CustomArrow aria-label="rightArrow" direction="right" />,
      prevArrow: !isLessThanLg && <CustomArrow aria-label="leftArrow" direction="left" />,
      responsive: [
        {
          breakpoint: 1537,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 961,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 760,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    [isLessThanLg]
  )

  return (
    <Box w={'full'} px={{ sm: 0 }}>
      <Slider {...settings}>{children}</Slider>
    </Box>
  )
}

function CarouselItem({ children, ...rest }: BoxProps) {
  return (
    <Box py={2} px={{ sm: 0, md: 3 }} {...rest}>
      {children}
    </Box>
  )
}

Carousel.Item = CarouselItem

export { Carousel }
