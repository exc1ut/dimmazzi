import { SearchIcon } from "../../../img/icons/FigmaIcons";
import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type SearchInputProps = {}

export const SearchInput = (props: SearchInputProps) => {
  return (
    <InputGroup>
      <Input />
      <InputRightElement children={<Icon as={SearchIcon} />} />
    </InputGroup>
  );
};