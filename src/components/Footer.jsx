import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" p={5} borderTop="1px" borderColor="gray.200" textAlign="center">
      © 2024 My React App. All rights reserved.
    </Box>
  );
};

export default Footer;
