import { BottomNavbar, Button, SideNavbar } from "./components/common";
import { changeTheme } from "./redux/features/app-theme";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { BsMusicNote, BsMusicNoteList } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Outlet } from "react-router-dom";
import MusicPlayer from "./components/features/music-player";
import classNames from "classnames";
import logo from "./assets/react.svg";
import TopPlay from "./components/features/top-play/top-play";

const App = () => {
  const isDarkMode = useAppSelector((state) => state.appTheme.isDarkMode);
  const { activeSong } = useAppSelector((state) => state.musicPlayer);
  const dispatch = useAppDispatch();

  const changeAppTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <div className="relative flex">
      <SideNavbar
        links={[
          { to: "discover", label: "Discover" },
          { to: "/", label: "Music" },
        ]}
        logo={logo}
      />
      <div
        className={classNames(
          "flex h-full w-full flex-col md:flex-row relative",
          isDarkMode
            ? "bg-gradient-to-r from-indigo-900 to-indigo-500"
            : "bg-gradient-to-r from-sky-500 to-blue-500"
        )}
      >
        <Button onClick={changeAppTheme} asIconButton className="mx-auto w-12 absolute top-0 right-0 md:right-[480px] self-center z-10">
          {isDarkMode ? <MdLightMode size={32} /> : <MdDarkMode size={32} />}
        </Button>
        <Outlet />
        <TopPlay />
        {activeSong?.title && <MusicPlayer />}
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
    </div>
  );
};

export default App;
