import "@testing-library/jest-dom";
import InputField from "./input-field";
import { fireEvent, render, screen } from "@testing-library/react";

it("Input Field renders properly", () => {
  const { getByTestId } = render(
    <InputField
      dataTestId="test-input-field"
      label="Test"
      onChange={(e:any) => console.log(e.target.value)}
      value="89"
    />
  );

  const testField = getByTestId("test-input-field");

  expect(testField).toHaveValue("89");
});

it("Input Field perfroms onChange function properly", () => {

  const { getByTestId } = render(
    <InputField
      dataTestId="test-input-field"
      label="Test"
      onChange={(e:any) => console.log(e.target.value)}
    />
  );

  const testField = getByTestId("test-input-field");

  fireEvent.change(testField, {target: {value: "90"}})

  expect(testField).toHaveValue("90");
});