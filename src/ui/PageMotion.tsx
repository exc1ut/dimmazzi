import { motion, Variants } from 'framer-motion'

interface PageMotionProps {}

const variants: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    // x: -100,
    // scale: 1.1,
    opacity: 0,
  },
}

export const PageMotion: React.FC<PageMotionProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{
        ease: 'easeInOut',
        duration: 0.2,
      }}
    >
      {children}
    </motion.div>
  )
}
