import { Button, ButtonProps } from '@chakra-ui/react'

interface CountChangeProps extends ButtonProps {
  operator: '+' | '-'
}

const CountChange: React.FC<CountChangeProps> = ({ operator, ...rest }) => {
  return (
    <Button
      bgColor="premium_red.1000"
      color="white"
      width="1.875rem"
      minW="none"
      h="1.875rem"
      fontSize="1.4rem"
      boxSizing="border-box"
      fontWeight={500}
      {...rest}
    >
      {operator}
    </Button>
  )
}

export default CountChange
