import { Card, Selector } from "../components/common";
import { genres } from "../assets/constants";
import { useState } from "react";
import { IoMusicalNotes } from "react-icons/io5";

import { useGetTopChartsQuery } from "../redux/services/shazam-core";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { playPause, setActiveSong } from "../redux/features/music-player";
import classNames from "classnames";

const DiscoverPage = () => {
  const dispatch = useAppDispatch();
  const { isPlaying, activeSong } = useAppSelector(
    (state) => state.musicPlayer
  );
  const isDarkMode = useAppSelector((state) => state.appTheme.isDarkMode);

  const { data, isFetching, error } = useGetTopChartsQuery("");

  const [selectedGenre, setSelectedGenre] = useState<string>();

  const handlePlayPauseSong = (song: any, data: any, i: number) => {
    if (isPlaying) {
      return dispatch(playPause(false));
    }
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="mx-4 flex h-[85%] sm:h-screen w-full flex-col">
      <h2
        className={classNames(
          "my-4 text-3xl font-bold",
          isDarkMode ? "text-white" : "text-black"
        )}
      >
        Discover {selectedGenre}
      </h2>
      <Selector
        options={genres.map((genre) => genre.title)}
        onChange={setSelectedGenre}
        value={selectedGenre}
      />
      {isFetching ? (
        <div className="flex w-full flex-col items-center justify-center">
          <IoMusicalNotes size={64} className="animate-pulse" />
          <span className="font-bold">Loading songs...</span>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 overflow-y-auto">
          {data?.map((song: any, i: number) => {
            const { images, title, key, subtitle } = song;
            return (
              <Card
                key={key}
                className="w-40 sm:w-52"
                cardImage={{
                  image: images?.background,
                  className: "rounded-lg p-4",
                }}
                cardBody={
                  <div className="flex flex-col">
                    <span className="font-bold">{title}</span>
                    <span>{subtitle}</span>
                  </div>
                }
                onClick={() => handlePlayPauseSong(song, data, i)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DiscoverPage;
