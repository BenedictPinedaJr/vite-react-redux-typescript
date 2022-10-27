import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Card } from "../../common";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

import { playPause, setActiveSong } from "../../../redux/features/music-player";
import { useGetTopChartsQuery } from "../../../redux/services/shazam-core";

import "swiper/css";
import "swiper/css/free-mode";
import classNames from "classnames";

const TopPlay = () => {
  const dispatch = useAppDispatch();
  const { isPlaying, activeSong } = useAppSelector(
    (state) => state.musicPlayer
  );
  const isDarkMode = useAppSelector((state) => state.appTheme.isDarkMode);
  const { data } = useGetTopChartsQuery("");

  const handlePlayPauseSong = (song: any, data: any, i: number) => {
    if (isPlaying) {
      return dispatch(playPause(false));
    }
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const topPlays = data?.slice(0, 5);

  return (
    <div className="flex h-full w-full sm:w-1/2 flex-col">
      <div className="flex flex-col py-6">
        <h2
          className={classNames(
            "font-bold",
            isDarkMode ? "text-white" : "text-black"
          )}
        >
          Top Charts
        </h2>
        {topPlays?.map((song: any, i: number) => {
          const { images, title, key, subtitle } = song;
          return (
            <Card
              key={key}
              className="my-1 h-24 w-full"
              cardImage={{
                image: images?.background,
                className: "rounded-lg p-4 h-24 w-24",
              }}
              cardBody={
                <div className="flex flex-col">
                  <span className="font-bold">{title}</span>
                  <span>{subtitle}</span>
                </div>
              }
              isHorizontal
              onClick={() => handlePlayPauseSong(song, data, i)}
            />
          );
        })}
      </div>
      <div className="flex flex-col">
        <h2 className={classNames(
            "font-bold",
            isDarkMode ? "text-white" : "text-black"
          )}>Top Artists</h2>
        <div className="flex">
          <Swiper
            slidesPerView="auto"
            spaceBetween={15}
            freeMode
            modules={[FreeMode]}
          >
            {topPlays?.map((song: any, i: number) => {
              const { images, title, key, subtitle } = song;
              return (
                <SwiperSlide key={key} style={{ width: "25%" }}>
                  <img
                    src={images?.background}
                    alt="Artist"
                    className="h-24 w-24 rounded-full object-cover shadow-lg"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
