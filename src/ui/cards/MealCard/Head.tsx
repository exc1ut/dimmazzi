import { AspectRatio, Box, Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { NextImage } from '../../NextImage'

interface HeadProps {
  image: string
  menu?: string[]
  selected?: string
  onMenuClick?: (type: string) => void
}

export const Head: React.FC<HeadProps> = ({ image, menu, onMenuClick, selected }) => {
  const handleClick = (type: string) => {
    onMenuClick?.(type)
  }

  return (
    <AspectRatio w="full" ratio={16 / 10}>
      <Box d="flex" justifyContent="right" position="relative" h={'full'} w={'full'}>
        <Box zIndex={-1} h={'full'} w="full" position="absolute">
          <NextImage objectFit={'cover'} placeholder="blur" w={'full'} h={'full'} src={image} />
        </Box>
        <Box pr={4} pt={4}>
          <ButtonGroup colorScheme="premium_red" size="sm" isAttached variant="outline">
            {menu?.map((v) => (
              <Button
                // backgroundColor={v === selected ? 'premium_red.1000' : 'premium_red.50'}
                variant={v === selected ? 'solid' : 'outline'}
                onClick={() => handleClick(v)}
              >
                {v}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Box>
    </AspectRatio>
  )
}
