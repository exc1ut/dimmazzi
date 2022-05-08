import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { ChangeEventHandler, FunctionComponent } from "react";
import { useMobileStore } from "../useMobileStore";

interface MobileSearchProps {
  //onInputChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onClose: () => void;
}

const MobileSearch: FunctionComponent<MobileSearchProps> = ({ onClose }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter()
  const [term, setTerm] = React.useState("");
  const { search, setSearch } = useMobileStore()
  //const [debounce, setDebounce] = React.useState("");

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, [])

  React.useEffect(() => {
    console.log(term, "search");

    const interval = setTimeout(() => {
      console.log("I am here");
      setSearch(term);
    }, 500)
    return () => clearTimeout(interval);
  }, [term])

  return (<>
    <InputGroup w="full">
      <Input
        ref={inputRef}
        padding=".5rem .1rem"
        _focus={{
          border: '1.5px solid #D13406',
        }}
        onChange={(e) => { setTerm(e.target.value); }}
      />
      <InputRightElement>
        <IconButton
          _hover={{
            backgroundColor: 'transparent',
          }}
          onClick={() => { setSearch(""); onClose() }}
          display={'flex'} justifyContent={'center'} alignItems={'center'} aria-label='search' backgroundColor="transparent" color="premium_dark.600">
          {/* {!term ? <SearchIcon boxSize={6} top='.6rem' /> : <CloseIcon />} */}
          <CloseIcon />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  </>);
}

export default MobileSearch;