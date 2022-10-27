import Selector from "./selector";
import "@testing-library/jest-dom";
import { genres } from "../../../assets/constants";
import { fireEvent, render, screen } from "@testing-library/react";
import { useState } from "react";

it("Selector renders properly", () => {

  const { getByTestId } = render(
    <Selector
      dataTestId="test-selector"
      options={genres.map((genre) => genre.title)}
      
    />
  );

  const testSelector = getByTestId("test-selector")

  expect(testSelector).toBeInTheDocument()
});
