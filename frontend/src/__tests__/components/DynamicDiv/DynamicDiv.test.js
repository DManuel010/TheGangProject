import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../../../App";

test("detect text change on click", () => {
  const { getByText } = render(<App />);
  const initialText = getByText(/Initial Text/i);
  expect(initialText).toBeInTheDocument();
  fireEvent.click(getByText("Change Text"));
  const newText = getByText(/New Text/i);
  expect(newText).toBeInTheDocument();
});
