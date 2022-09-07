import { Box } from "@chakra-ui/layout";
import React from "react";
import { Outlet } from "react-location";

export default function VideoPageLayout(): JSX.Element {
  return (
    <Box as="section" display="flex" flexDirection="row" gap="8" height="100%">
      <Box display="flex" as="section" height="100%" width="8rem" bg="red">
        Some left junk
      </Box>
      <Box as="main">
        <Outlet />
      </Box>
    </Box>
  );
}
