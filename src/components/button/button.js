import React from "react";
import Box from "../box/box";

const Button = ({ children }) => {
  return (
    <Box as="button" color="#fff" bg="green" border="none" px="18px" py="6px">
      {children}
    </Box>
  );
};

export default Button;
