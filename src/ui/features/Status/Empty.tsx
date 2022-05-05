import { Heading, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Lottie from 'lottie-react-web'
import animation from './empty.json'
import { useTranslation } from "react-i18next";

import { motion, Variants } from "framer-motion";
interface EmptyProps {

}

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

const Empty: FunctionComponent<EmptyProps> = () => {
  const { t } = useTranslation();
  return (<motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={variants}
  >
    <VStack w="full" align="center" spacing={4} maxH={[]}>
      <Lottie
        options={{ animationData: animation, loop: false }}
        height="20rem"
      />
      <Heading fontSize="1.5rem" lineHeight="2rem" color="premium_red.1000">{t`No Data found!`}</Heading>
    </VStack>
  </motion.div>
  );
}

export default Empty;