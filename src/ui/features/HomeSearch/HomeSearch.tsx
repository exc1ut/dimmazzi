import { SearchCard } from "../../cards/SearchCard";
import { Box, Input, Modal, ModalOverlay, Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import * as React from "react";
import { NextImage } from "../../NextImage";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type HomeSearchProps = {}

export const HomeSearch: React.FC<HomeSearchProps> = ({ }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const restaurants = ["Evos - Lavash center", "Shohona - Milliy taomlar", "Retro - Turk taomlari", "SamOsh - Plov center", "Kebab - Plov center"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const match = restaurants.some(item => item.match(e.target.value));
    console.log(match, " match");
    if (e.target.value.length > 0 && !isOpen && match) {
      //inputRef.current?.focus();
      setIsOpen(true);
      setValue(e.target.value);

    }
    else if (e.target.value.length > 0) {
      setValue(e.target.value);
    }
    else if (e.target.value.length === 0 && isOpen) {
      inputRef.current?.focus();
      setIsOpen(false);
      setValue("");
    }
    if (!match) {

      setIsOpen(false);
    }
  }
  return (
    <Box bgImage="/assets/images/search_background.jpg" position='relative'
      w='100%'
      h='10rem'
      display='flex'
      justifyContent='center'
      alignItems='center'
      borderRadius={8}
      height='10rem'
      bgSize='cover'
      bgRepeat='no-repeat'
    // filter='brightness(0.8)'
    >


      <Popover isOpen={isOpen} autoFocus={false} size='md'>
        <PopoverTrigger >
          <Input filter="invert(-70%)"
            position="absolute" w="50%" autoComplete="off" onFocusCapture={() => { setModalIsOpen(true) }} ref={inputRef} onChange={handleChange} variant="solid" bgColor="white" zIndex={2000} position="relative" />
        </PopoverTrigger>
        <PopoverContent w="100%" ref={inputRef}>
          {restaurants.map(item => {
            if (item.match(value)) {
              return <SearchCard name={item} category="fastfood" />
            }
          })}
        </PopoverContent>

      </Popover>
      <Modal isOpen={modalIsOpen} onClose={() => console.log("close")}>
        <ModalOverlay bgColor="blackAlpha.500" onClick={() => { setModalIsOpen(false) }} />
      </Modal>
    </Box>
  );
};