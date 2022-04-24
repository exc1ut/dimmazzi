import { Button, HStack } from "@chakra-ui/react";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type TabButtonProps = {
  rightTab: string,
  leftTab: string,
  rightHandle: () => void,
  leftHandle: () => void,
  active: "rigth" | "left"
}

export const TabButton: React.FC<TabButtonProps> = ({ rightTab, leftTab, rightHandle, leftHandle, active }) => {

  return (
    <HStack h="2.25rem" w="100%" spacing="0" padding="0px">
      <Button h="full" w="50%" variant={active === "left" ? "solid" : "outline"} onClick={leftHandle} borderRightRadius="0">{leftTab}</Button>
      <Button h="full" w="50%" variant={active === "left" ? "outline" : "solid"} onClick={rightHandle} borderLeft="0px " borderLeftRadius="0">{rightTab}</Button>
    </HStack>
  );
};