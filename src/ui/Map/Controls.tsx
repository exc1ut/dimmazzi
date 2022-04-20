import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { IconButton, VStack } from '@chakra-ui/react'
import { GeoIcon } from '../../img/icons/GeoIcon'
import { Button } from './Button'
import { useMapStore } from './useMapStore'

interface ControlsProps {}

export const Controls: React.FC<ControlsProps> = ({}) => {
  const { increase, decrease, setCurrentPosition } = useMapStore()

  return (
    <VStack spacing={4} bottom={6} right={4} zIndex={999} position="absolute">
      <Button
        onClick={() => setCurrentPosition()}
        mb={6}
        aria-label="minus"
        icon={<GeoIcon boxSize="1.5em" />}
      />
      <Button onClick={() => increase()} aria-label="plus" icon={<AddIcon />} />
      <Button onClick={() => decrease()} aria-label="minus" icon={<MinusIcon />} />
    </VStack>
  )
}
