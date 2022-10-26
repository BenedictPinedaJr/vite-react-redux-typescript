import { render, screen } from "@testing-library/react";
import Button from "./button";
import "@testing-library/jest-dom";

it("Button renders properly", () => {
  const { getByTestId } = render(
    <Button dataTestId="test-button" onClick={() => console.log("Button has been clicked")}>
      Click Me
    </Button>
  );

  const testButton = getByTestId("test-button")

  expect(testButton).toHaveTextContent("Click Me")
});
