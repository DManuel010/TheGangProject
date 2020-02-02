import React from "react";
import { render } from "@testing-library/react";
import Home from "../../../containers/Home";

test("renders learn react link", () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/The Gang Project/i);
  expect(linkElement).toBeInTheDocument();
});
