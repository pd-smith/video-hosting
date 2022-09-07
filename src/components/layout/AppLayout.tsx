import { Box, Text } from "@chakra-ui/layout";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-location";

function NavBar(): JSX.Element {
  return (
    <Box
      as="nav"
      width="100%"
      bg="blue.100"
      minHeight="5"
      paddingX={[4, 16]}
      paddingY="4"
    >
      <Text fontSize="xl">Heading Hello</Text>
    </Box>
  );
}

export default function AppLayout(): JSX.Element {
  return (
    <ChakraProvider resetCSS>
      <Box minHeight="100vh">
        <NavBar />
        <Box width="100%" height="100%">
          <Outlet />
        </Box>
      </Box>
    </ChakraProvider>
  );
}
