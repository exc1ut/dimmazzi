import { useRestaurantListQuery } from "@/api/restaurant/useRestaurantListQuery";
import { SearchCard } from "@/ui/cards/SearchCard";
import Empty from "@/ui/features/Status/Empty";
import { useMobileStore } from "@/ui/layouts/Header/useMobileStore";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Divider, IconButton, Input, InputGroup, InputRightElement, Link, Spinner, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FunctionComponent } from "react";

interface MobileProps {
  //searchValue: string
}

const Mobile: FunctionComponent<MobileProps> = ({ }) => {
  const router = useRouter()
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { search, setSearch, reset } = useMobileStore()
  const [debounce, setDebounce] = React.useState("");
  const response = useRestaurantListQuery({ search: debounce });
  React.useEffect(() => {
    const interval = setTimeout(() => {
      setDebounce(search);
    }, 500)
    return () => clearTimeout(interval);
  }, [search])

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (<VStack>
    <InputGroup p="0">
      <Input
        border="none"
        ref={inputRef}
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.05)"
        variant="filled"
        w="full"
        p=".75rem"
        value={search}
        borderRadius="none"
        height={12}
        bgColor="transparent"
        onChange={(e) => setSearch(e.target.value)}
      />
      <InputRightElement onClick={() => router.push("/")}>
        <IconButton
          onClick={() => { router.back() }}
          aria-label="close" backgroundColor="transparent" color="premium_dark.600" h={10} w={10}>
          <CloseIcon />
        </IconButton>
      </InputRightElement>
    </InputGroup>
    {!debounce ? <Box w="100%" h="30rem"></Box> : response.isFetching ? <Spinner /> : (!response?.data?.results.length) ? <Empty /> : response?.data?.results.map((item) => {
      return (<Link href={`/restaurant/${item.id}`} w="full">
        <a>
          <SearchCard img={item.logo.file} name={item.title} category="fastfood" />
        </a>
        <Divider marginX="auto" w="90%" />
      </Link>)
    })}


  </VStack>);
}

export default Mobile;