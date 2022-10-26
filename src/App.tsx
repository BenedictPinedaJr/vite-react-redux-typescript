import { BottomNavbar, Button } from "./components/common";
import { changeTheme } from "./redux/features/app-theme";

import { useAppDispatch, useAppSelector } from "./redux/hooks";

import { BsMusicNote, BsMusicNoteList } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Outlet } from "react-router-dom";
import MusicPlayer from "./components/features/music-player";
import classNames from "classnames";

const App = () => {
  const isDarkMode = useAppSelector((state) => state.appTheme.isDarkMode);
  const { activeSong } = useAppSelector((state) => state.musicPlayer);
  const dispatch = useAppDispatch();

  const changeAppTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <div
      className={classNames(
        "flex h-screen flex-col",
        isDarkMode
          ? "bg-gradient-to-r from-indigo-900 to-indigo-600"
          : "bg-gradient-to-r from-sky-500 to-indigo-500"
      )}
    >
      <Button onClick={changeAppTheme} asIconButton className="w-12 mx-auto">
        {isDarkMode ? <MdLightMode size={32} /> : <MdDarkMode size={32} />}
      </Button>
      <Outlet />
      {activeSong?.title && (
        <MusicPlayer />
      )}
      <BottomNavbar
        iconLinks={[
          { icon: <BsMusicNote size={32} />, to: "/", label: "Music" },
          {
            icon: <BsMusicNoteList size={32} />,
            to: "discover",
            label: "Discover",
          },
        ]}
      />
    </div>
  );
};

export default App;
