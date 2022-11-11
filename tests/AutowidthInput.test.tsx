import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import { AutowidthInput } from "../src";

it("renders correctly", () => {
  const tree = renderer.create(<AutowidthInput />).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders default`, () => {
  render(<AutowidthInput />);

  expect(screen.getByTestId("wrapper")).toBeInTheDocument();
  expect(screen.getByTestId("sizer")).toBeInTheDocument();
  expect(screen.getByTestId("input")).toBeInTheDocument();
});

it(`renders placeholder`, () => {
  render(<AutowidthInput placeholder="test" />);

  expect(screen.getByTestId("placeholder-sizer")).toBeInTheDocument();
});
