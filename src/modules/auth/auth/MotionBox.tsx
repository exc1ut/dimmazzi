import { Box, BoxProps, ChakraComponent } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'

const variants: Variants = {
  initial: {
    x: 50,
    opacity: 0.3,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.2,
    },
  },
}

export const MotionBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      initial="initial"
      exit="exit"
      animate="animate"
      variants={variants}
      as={motion.div}
      {...props}
    >
      {children}
    </Box>
  )
}
