import { Button } from "@chakra-ui/react";

interface CountChangeProps {
  operator: '+' | '-'
}

const CountChange: React.FC<CountChangeProps> = ({ operator }) => {
  return (<Button
    bgColor="premium_red.1000"
    color="white"
    width="1.875rem"
    minW="none"
    h="1.875rem"
    fontSize="1.4rem"
    boxSizing="border-box"
    fontWeight={500}
  >{operator}</Button>);
}

export default CountChange;