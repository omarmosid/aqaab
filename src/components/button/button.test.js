import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from "./button";

test("Renders a button correctly", () => {
  const greeting = "Jello Jelly";
  const { getByText } = render(<Button>{greeting}</Button>);

  expect(screen.getByText(greeting)).toBeInTheDocument()
});