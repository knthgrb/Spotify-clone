import React from "react";

const PlaylistItem = ({ title, owner, image }) => {
  return (
    <li className="flex rounded-lg p-1.5 gap-3 items-center cursor-pointer hover:bg-[#504b4b] overflow-x-hidden">
      <img className="h-14 w-14 rounded-md" src={image} />
      <div>
        <h3 className="font-medium text-gray-100 truncate w-48 md:w-[190px] lg:w-[190px] xl:w-[220px]">
          {title}
        </h3>
        <p className="text-gray-300">{owner}</p>
      </div>
    </li>
  );
};

export default PlaylistItem;
