import { SearchIcon } from "@chakra-ui/icons";
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { ChangeEventHandler, FunctionComponent } from "react";
import { useMobileStore } from "../useMobileStore";

interface MobileSearchProps {
  //onInputChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

const MobileSearch: FunctionComponent<MobileSearchProps> = ({ }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter()
  const { setSearch } = useMobileStore()
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
        onChange={(e) => { setSearch(e.target.value); router.push("/search/mobile") }}
      />
      <InputRightElement>
        <IconButton
          _hover={{
            backgroundColor: 'transparent',
          }}
          display={'flex'} justifyContent={'center'} alignItems={'center'} aria-label='search' backgroundColor="transparent" color="premium_dark.600">
          <SearchIcon boxSize={6} top='.6rem' />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  </>);
}

export default MobileSearch;