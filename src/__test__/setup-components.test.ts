import { render } from "@testing-library/react";
import React from "react";
import { Test } from "../Test";

describe("Test component", () => {
  it("devrait s'afficher correctement", () => {
    const { getByText } = render(React.createElement(Test));
    expect(getByText("Test")).toBeInTheDocument();
  });
});
