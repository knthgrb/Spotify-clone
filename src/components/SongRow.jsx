import React from "react";
import { useDataLayer } from "../stores/useDataLayer";
import { getTrack } from "../services/apiServies";
import style from "../styles/SongRow.module.css";

const SongRow = ({
  name,
  artist,
  index,
  album,
  dateAdded,
  duration,
  image,
  id,
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const formattedDate = formatDate(dateAdded);

  const formatDuration = (durationMs) => {
    const totalSeconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const formattedDuration = formatDuration(duration);

  const { token, SET_SELECTED_TRACK } = useDataLayer();

  const handleTrackClick = async (token, id) => {
    const track = await getTrack(token, id);
    SET_SELECTED_TRACK(track);
  };

  return (
    <div className="overflow-hidden">
      <li>
        <button
          onClick={() => handleTrackClick(token, id)}
          className="flex hover:bg-[#232222] focus:bg-[#232222] rounded-lg w-full items-center text-left pt-1.5 pb-1.5 gap-2"
        >
          <span className="basis-[30px] ml-5 text-left flex items-center w-2">
            {index + 1}
          </span>
          <div className="flex gap-3 basis-full min-w-[11.5rem] md:basis-2/4 xl:basis-2/5 md:min-w-[12rem] ml-3 items-center">
            <img className="h-12 w-12" src={image} />

            <div>
              <p
                className={`w-[7rem] md:w-[8rem] lg:w-[7rem] xl:w-[12rem] truncate font-[500] ${style.title}`}
              >
                {name}
              </p>
              <p className="truncate w-24 md:w-32 lg:w-36 xl:w-48 text-[12px]">
                {artist}
              </p>
            </div>
          </div>
          <p className="basis-1/3 min-w-[5rem] hidden md:block text-[14px] truncate">
            {album}
          </p>
          <p className="basis-1/4 min-w-[5rem] hidden lg:block text-center">
            {formattedDate}
          </p>
          <p className="basis-1/4 hidden md:block text-center">
            {formattedDuration}
          </p>
        </button>
      </li>
    </div>
  );
};

export default SongRow;
