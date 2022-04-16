//import { SearchIcon } from "../../../img/icons/FigmaIcons";
import { SearchIcon } from "@chakra-ui/icons";
import { Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type SearchInputProps = {}

export const SearchInput = (props: SearchInputProps) => {
  return (
    <InputGroup>
      <Input
        placeholder="Taom yoki restoranni qidiring"
      />
      <InputRightElement children={<SearchIcon />} backdropBlur />
    </InputGroup>
  );
};