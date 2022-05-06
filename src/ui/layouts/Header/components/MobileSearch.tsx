import { SearchIcon } from "@chakra-ui/icons";
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import { ChangeEventHandler, FunctionComponent } from "react";

interface MobileSearchProps {
  onInputChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const MobileSearch: FunctionComponent<MobileSearchProps> = ({ onInputChange }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, [])


  return (<>
    <InputGroup w="full">
      <Input
        ref={inputRef}
        padding=".5rem .1rem"
        _focus={{
          border: '1.5px solid #D13406',
        }}
        onChange={onInputChange}
      />
      <InputRightElement>
        <IconButton display={'flex'} justifyContent={'center'} alignItems={'center'} aria-label='search' backgroundColor="transparent" color="premium_dark.600">
          <SearchIcon boxSize={6} top='.6rem' />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  </>);
}

export default MobileSearch;