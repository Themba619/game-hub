import { Flex, Heading, Spacer } from "@chakra-ui/react";
import { ColorModeButton } from "../ui/color-mode";

export const Mode = () => {
  return (
    <Flex
      as="nav"
      p={4}
      align="center"
      bg="gray.100"
      _dark={{ bg: "gray.800" }}
    >
      <Heading size="md">Change Mode</Heading>
      <Spacer />
      <ColorModeButton />
    </Flex>
  );
};
