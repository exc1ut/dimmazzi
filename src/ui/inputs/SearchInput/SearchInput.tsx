//import { SearchIcon } from "../../../img/icons/FigmaIcons";
import { SearchIcon } from '@chakra-ui/icons'
import { Icon, Input, InputGroup, InputGroupProps, InputRightElement } from '@chakra-ui/react'
import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface SearchInputProps extends InputGroupProps {}

export const SearchInput = ({ placeholder, ...props }: SearchInputProps) => {
  return (
    <InputGroup {...props}>
      <Input placeholder={placeholder} />
      <InputRightElement children={<SearchIcon />} backdropBlur />
    </InputGroup>
  )
}
