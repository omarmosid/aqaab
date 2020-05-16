import React from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyles } from "../src/styles/globalStyles";
import { theme } from "../src/styles/theme";
import { ThemeProvider } from "styled-components";

addDecorator((story) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {story()}
    </ThemeProvider>
  </>
));
