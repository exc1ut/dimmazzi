import { Box, Text, VStack } from '@chakra-ui/react'
import { useEffect } from '@storybook/addons'
import { t } from 'i18next'
import React from 'react'
import useDebounce from '../../hooks/useDebounce'
import { SearchInput } from '../inputs/SearchInput'

export interface SearchBarProps {
  results: google.maps.places.PlaceResult[]
  onChange: (text: string) => void
  onSelect: (result: google.maps.places.PlaceResult) => void
}

const SearchBar = ({ results, onChange, onSelect }: SearchBarProps) => {
  const [search, setSearch] = React.useState('')
  const debounce = useDebounce(search, 300)

  React.useEffect(() => {
    onChange(debounce)
  }, [debounce])

  const handleBlur = () => {
    setSearch('')
  }

  return (
    <Box w="full">
      <VStack justifyContent={'center'}>
        <SearchInput
          borderRadius={'lg'}
          placeholder={t`Search places...`}
          backgroundColor="white"
          w={'60%'}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={handleBlur}
          value={search}
        />
        <VStack
          overflowY={'auto'}
          maxHeight={250}
          borderRadius={'lg'}
          bgColor={'white'}
          alignItems={'flex-start'}
          w="60%"
          zIndex={99}
        >
          {results.map((v) => (
            <VStack
              w={'full'}
              cursor={'pointer'}
              spacing={1}
              alignItems={'flex-start'}
              px={4}
              py={2}
              textAlign="start"
              _hover={{ bgColor: 'gray.200' }}
              onClick={() => onSelect(v)}
            >
              <Text fontWeight={'bold'} fontSize={'md'}>
                {v.name}
              </Text>
              <Text fontSize={'sm'}>{v.formatted_address}</Text>
            </VStack>
          ))}
        </VStack>
      </VStack>
    </Box>
  )
}
export default SearchBar
