import { Box, IconButton, Text } from '@chakra-ui/react'
import { HeartFill } from '../../../img/icons/Icons'

type Shades = 'success' | 'warning'

interface HeadProps {
  image: string
  status: string
  shade: Shades
}

export const Head: React.FC<HeadProps> = ({ image, status, shade }) => {
  const statusProps: Record<Shades, { color: string; fontColor: string }> = {
    success: {
      color: 'premium_green.1000',
      fontColor: 'premium_dark.50',
    },
    warning: {
      color: 'premium_orange.1000',
      fontColor: 'premium_dark.900',
    },
  }

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'flex-end'}
      flexDir={'column'}
      h={200}
      objectFit={'contain'}
      backgroundPosition={'center'}
      backgroundImage={image}
      w={'full'}
      p={4}
    >
      <Box>
        <IconButton
          variant="unstyled"
          backgroundColor={'rgba(255,255,255,0.9)'}
          size={'md'}
          fontSize="20px"
          aria-label="Call Sage"
          borderRadius={'full'}
          icon={<HeartFill color={'premium_red.1000'} />}
        />
      </Box>
      <Box borderRadius={'md'} px={2.5} py={0.5} backgroundColor={statusProps[shade].color}>
        <Text color={statusProps[shade].fontColor} fontWeight={400} fontSize={13}>
          {status}
        </Text>
      </Box>
    </Box>
  )
}