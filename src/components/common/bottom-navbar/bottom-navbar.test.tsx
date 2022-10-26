import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BottomNavbar from "./bottom-navbar";
import { BsMusicNote, BsChat, BsMusicNoteList } from "react-icons/bs";

test("Bottom Navbar renders properly", () => {
  const { getByTestId } = render(
    <BottomNavbar
      iconLinks={[
        { icon: <BsMusicNote size={32} />, to: "/" },
        { icon: <BsChat size={32} />, to: "test" },
        { icon: <BsMusicNoteList size={32} />, to: "test-2" },
      ]}
      dataTestId="test-navbar"
    />
  );

  const testNavbar = getByTestId("test-navbar")

  expect(testNavbar).toContain([
    { icon: <BsMusicNote size={32} />, to: "/" },
    { icon: <BsChat size={32} />, to: "test" },
    { icon: <BsMusicNoteList size={32} />, to: "test-2" },
  ])
});
