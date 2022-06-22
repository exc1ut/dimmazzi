//import { SearchIcon } from "../../../img/icons/FigmaIcons";
import { SearchIcon } from '@chakra-ui/icons'
import { Icon, Input, InputGroup, InputGroupProps, InputRightElement } from '@chakra-ui/react'
import * as React from 'react'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface SearchInputProps extends InputGroupProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

export const SearchInput = ({
  placeholder,
  onChange,
  onBlur,
  value,
  ...props
}: SearchInputProps) => {
  return (
    <InputGroup {...props}>
      <Input value={value} onChange={onChange} placeholder={placeholder} onBlur={onBlur} />
      <InputRightElement children={<SearchIcon />} backdropBlur />
    </InputGroup>
  )
}
