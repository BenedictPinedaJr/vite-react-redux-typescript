import "@testing-library/jest-dom";
import InputField from "./input-field";
import { render, screen } from "@testing-library/react";

it("Input Field renders properly", () => {
  const { getByTestId } = render(
    <InputField
      dataTestId="test-input-field"
      label="Test"
      onChange={(e: string) => console.log(e.target.value)}
      value="89"
    />
  );

  const testField = getByTestId("test-input-field");

  expect(testField).toHaveValue("89");
});
