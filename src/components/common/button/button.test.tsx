import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./button";
import "@testing-library/jest-dom";

it("Button renders properly", () => {
  const { getByTestId } = render(
    <Button
      dataTestId="test-button"
      onClick={() => console.log("Button has been clicked")}
    >
      Click Me
    </Button>
  );

  const testButton = getByTestId("test-button");

  expect(testButton).toBeInTheDocument();
  expect(testButton).toHaveTextContent("Click Me");
});

it("Button performs onClick function properly", () => {

  var count: number = 0

  const { getByTestId } = render(
    <Button
      dataTestId="test-button"
      onClick={() => count++}
    >
      Click Me
    </Button>
  );

  const testButton = getByTestId("test-button");

  fireEvent.click(testButton)

  expect(testButton).toBeInTheDocument();
  expect(count).toEqual(1)
});