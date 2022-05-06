import { SearchCard } from "../../cards/SearchCard";
import { Box, Input, InputGroup, InputRightElement, Modal, ModalOverlay, Popover, PopoverBody, PopoverContent, PopoverTrigger, Spinner } from "@chakra-ui/react";
import * as React from "react";
import { InputSearchIcon } from "../../../img/icons/Icons";
import { t } from "i18next";
import { SearchIcon } from "@chakra-ui/icons";
import { useRestaurantListQuery } from "../../../api/restaurant/useRestaurantListQuery";
import { IRestaurantBody } from "../../../api/restaurant/IRestaurantQuery.interface";
import { resourceLimits } from "worker_threads";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { NextImage } from "@/ui/NextImage";
import { useLocation } from "@/stores/useLocation";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type HomeSearchProps = {}

export const HomeSearch: React.FC<HomeSearchProps> = ({ }) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [width, setWidth] = React.useState(0);
  //const [windowSize] = useWindowSize({ width: 0, height: 0 });
  const [value, setValue] = React.useState("");
  const [matchList, setMatchList] = React.useState<IRestaurantBody[]>([]);
  const [debounce, setDebounce] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  //const { latitude, longitude } = useLocation();
  // const restaurants = ["Evos - Lavash center", "Shohona - Milliy taomlar", "Retro - Turk taomlari", "SamOsh - Plov center", "Kebab - Plov center"];

  const response = useRestaurantListQuery({ search: debounce });

  // React.useEffect(() => {
  //   let width = document.querySelector('input')?.offsetWidth
  //   if (width) {
  //     setSearchBoxWidth(width);
  //   }
  // }, [])

  React.useEffect(() => {
    if (!matchList) {
      setIsOpen(false);
    }
  }, [matchList])
  React.useEffect(() => {
    if (!value.length) {
      setDebounce("");
    }

    const Interval = setTimeout(() => {
      if (value.length) {
        setDebounce(value);
      }
    }, 500)



    return () => clearTimeout(Interval);
  }, [value])


  React.useEffect(() => {
    handleDebounce();
  }, [debounce, response])


  const handleDebounce = React.useCallback(() => {
    const match = response.data?.results.some(item => item.title.match(debounce));


    if (debounce.length > 0 && !isOpen && match) {
      setIsOpen(true);
    }
    else if (debounce.length === 0 && isOpen) {
      inputRef.current?.focus();


      setIsOpen(false);

    }
    if (!match && isOpen && match !== undefined) {
      setIsOpen(false);
    }
  }, [debounce, response])

  // React.useLayoutEffect(() => {
  //   let widthValue = document.querySelector('input')?.offsetWidth;
  //   if (widthValue) {
  //     setWidth(widthValue);
  //   }
  // },
  //   [windowSize])

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    // const match = restaurants.some(item => item.match(e.target.value));
    // if (!match && isOpen) {
    //   setIsOpen(false);
    // }

    setValue(e.target.value);
    console.log("value has changed", value);

  }, [value])
  return (
    <Box position='relative'
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

      <NextImage src="/assets/images/search_background.jpg" w="full" h="full" objectFit="cover" borderRadius="0.5rem" filter="brightness(0.7)" />

      <Popover isOpen={isOpen && !!response.data?.results.length} autoFocus={false} size='md'>
        <PopoverTrigger >

          <InputGroup position="absolute" w="50%" zIndex={modalIsOpen ? 2000 : 0}>
            <Input filter="invert(-70%)"
              placeholder={t`Search meal or restaurants`}
              autoComplete="off" onFocusCapture={() => { setModalIsOpen(true) }} ref={inputRef} onChange={handleChange} variant="solid" bgColor="white" />
            <InputRightElement height="full">
              {response.isFetching ? <Spinner /> : <InputSearchIcon />}
            </InputRightElement>
          </InputGroup>
        </PopoverTrigger>
        <PopoverContent w={`${document.querySelector('input')?.offsetWidth}px` || "100%"}>
          {response?.data?.results.map(item => {
            console.log("item", item);

            if (item?.title.match(value)) {
              return (<Link href={`/restaurant/${item.id}`}>
                <a>
                  <SearchCard img={item.logo.file} name={item.title} category="fastfood" />

                </a>
              </Link>)
            }
          })}
        </PopoverContent>

      </Popover>
      <Modal isOpen={modalIsOpen} onClose={() => console.log("close")}>
        <ModalOverlay bgColor="blackAlpha.500" onClick={() => { setIsOpen(false); setModalIsOpen(false) }} />
      </Modal>
    </Box>
  );
};