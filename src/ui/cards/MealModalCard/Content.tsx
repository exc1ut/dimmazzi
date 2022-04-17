import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, ButtonGroup, HStack, IconButton, Text, VStack } from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import { AnimatePresence, motion } from 'framer-motion'
import { title } from 'process'
import { useMemo, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { formatCurrency } from '../../../utils/currency'
import { NextImage } from '../../NextImage'
import { MealModalCardProps } from './MealModalCard'
import { MealModalDto } from './modal.dto'

interface ContentProps extends MealModalCardProps {}

export const Content: React.FC<ContentProps> = ({ image, price, title, types }) => {
  // Local states
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(types?.[0])

  //Libraries
  const { t } = useTranslation()
  const modal = useModal()

  const cost = useMemo(() => price * quantity, [price, quantity])

  const handleQuantityChange = (type: 'increase' | 'decrease') => {
    if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1)
    } else if (type === 'increase') {
      setQuantity(quantity + 1)
    }
  }

  const handleSubmit = () => {
    const dto: MealModalDto = {
      quantity,
      totalPrice: quantity * price,
      type: selected,
    }

    modal.resolve(dto)
    modal.hide()
  }

  return (
    <VStack spacing={5} px={4} pt={8} pb={8} alignItems={'center'}>
      <Text fontSize={'2xl'} fontWeight={700}>
        {title}
      </Text>
      <Box w={'full'} position="relative" borderRadius={'md'} overflow={'hidden'}>
        <NextImage zIndex={-1} src={image} w={'full'} h={200} />
        <ButtonGroup
          position={'absolute'}
          bottom={4}
          right={'50%'}
          transform={'translateX(50%)'}
          isAttached
          colorScheme="premium_red"
          size="sm"
        >
          {types?.map((v) => (
            <Button variant={v === selected ? 'solid' : 'outline'} onClick={() => setSelected(v)}>
              {v}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <HStack pt={2} w={'full'} justifyContent="space-between" alignContent="center">
        <Box>
          <Text
            as={motion.p}
            key={cost}
            initial={{ scale: 0.5, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 1 }}
            fontSize={'xl'}
            fontWeight={600}
          >
            {formatCurrency(cost)}
          </Text>
        </Box>
        <HStack spacing={4}>
          <IconButton
            size="sm"
            colorScheme="premium_red"
            aria-label="minus"
            icon={<MinusIcon />}
            onClick={() => handleQuantityChange('decrease')}
          />
          <Box>
            <Text
              as={motion.p}
              key={quantity}
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.2 }}
              fontWeight={700}
              fontSize={'1.2em'}
            >
              {quantity}
            </Text>
          </Box>
          <IconButton
            size="sm"
            colorScheme="premium_red"
            aria-label="minus"
            icon={<AddIcon />}
            onClick={() => handleQuantityChange('increase')}
          />
        </HStack>
      </HStack>
      <Button
        mt={5}
        colorScheme="premium_red"
        size="lg"
        w={'full'}
        onClick={() => handleSubmit()}
      >{t`Submit`}</Button>
    </VStack>
  )
}
