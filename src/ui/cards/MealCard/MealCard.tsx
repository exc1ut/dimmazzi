import { VStack } from '@chakra-ui/react'
import * as React from 'react'
import { Footer } from './Footer'
import { Head } from './Head'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type MealCardProps = {
  image: string
  name: string
  price: number
  types?: string[]
  onAdd: (type?: string) => void
}

export const MealCard: React.FC<MealCardProps> = ({ image, types, onAdd, name, price }) => {
  const [selected, setSelected] = React.useState(types?.[0])
  return (
    <VStack overflow="hidden" shadow={'xl'} borderRadius="lg">
      <Head image={image} menu={types} onMenuClick={setSelected} selected={selected} />
      <Footer onAdd={onAdd} price={price} title={name} />
    </VStack>
  )
}
