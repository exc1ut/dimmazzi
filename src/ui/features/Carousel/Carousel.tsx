import { Box, useBreakpointValue, useMediaQuery } from '@chakra-ui/react'
import * as React from 'react'
import { CustomArrow } from './CustomArrow'
import 'swiper/css'
import { Swiper as ReactSwiper } from 'swiper/react'
import Swiper, { Controller } from 'swiper'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type CarouselProps = {
  children: React.ReactNode
  maxChildren?: number
}

function Carousel({ children, maxChildren }: CarouselProps) {
  const [isLessThanMd, isLessThanLg] = useMediaQuery(['(max-width: 760px)', '(max-width: 1280px)'])
  const slidesPerView = useBreakpointValue([1, 2, 2, 3, maxChildren || 4])
  const [controlledSwiper, setControlledSwiper] = React.useState<Swiper>()
  const count = React.Children.count(children)

  return (
    <Box zIndex={0} w={'full'} px={{ sm: 0 }} position="relative">
      <ReactSwiper
        spaceBetween={16}
        slidesPerView={slidesPerView}
        modules={[Controller]}
        onSwiper={setControlledSwiper}
        controller={{ control: controlledSwiper }}
      >
        {children}
        {/* <CustomArrow aria-label="leftArrow" direction="left" /> */}
      </ReactSwiper>
      {!isLessThanLg && count > 3 && (
        <>
          <CustomArrow
            onClick={() => controlledSwiper?.slideNext()}
            zIndex={999}
            aria-label="rightArrow"
            direction="right"
          />
          <CustomArrow
            onClick={() => controlledSwiper?.slidePrev()}
            zIndex={999}
            aria-label="leftArrow"
            direction="left"
          />
        </>
      )}
    </Box>
  )
}

export { Carousel }
