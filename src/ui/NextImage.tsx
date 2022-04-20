import { Box, chakra, ImageProps } from '@chakra-ui/react'
import Image from 'next/image'

interface NextImageProps extends ImageProps {
  src: string
  placeholder?: 'blur' | 'empty' | undefined
}

export const NextImage: React.FC<NextImageProps> = (props) => {
  const NextImage = chakra(Image, {
    baseStyle: { maxH: 400, maxW: 400 },
    shouldForwardProp: (prop) =>
      ['width', 'height', 'src', 'alt', 'loader', 'layout', 'objectFit'].includes(prop),
  })

  return (
    <Box width={props.width || props.w} height={props.height || props.h} position="relative">
      <NextImage
        backgroundPosition={'center'}
        objectFit={'cover'}
        loader={() => props.src}
        layout="fill"
        {...props}
      />
    </Box>
  )
}
