import React from "react";
import Box from "./box";

export default {
  title: "Box",
};

export const RedBox = () => {
  return (
    <Box variant="primary" p="20px">
      Red box
    </Box>
  )
}
