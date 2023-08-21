import React from "react";
import SidebarOption from "./SidebarOption";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import Playlist from "./Playlist";

const Sidebar = () => {
  return (
    <div className="relative basis-[22%] min-w-[300px] pl-1.5 pr-1.5 pt-1.5 h-screen bg-[#040404]">
      <div
        style={{
          background:
            "linear-gradient(rgba(255, 255, 255, 0.1) 0%, rgb(40, 40, 40) 100%)",
        }}
        className="h-30 rounded-lg p-5 space-y-5"
      >
        <SidebarOption Option="Home" Icon={AiFillHome} />
        <SidebarOption Option="Search" Icon={FiSearch} />
      </div>
      <div className="bg-[#282828] relative h-[calc(100%-13.8rem)] mt-1.5 rounded-lg p-5 space-y-5">
        <div className="flex justify-between items-center">
          <SidebarOption Option="Your Library" Icon={VscLibrary} />
          <div className="hover:cursor-pointer hover:text-white rounded-full hover:bg-[#3d3838] text-gray-400 ease-in p-1">
            <AiOutlinePlus size="28" />
          </div>
        </div>
        <div className="flex gap-2 text-white font-medium">
          <button className="bg-[#6b6a73] rounded-full py-1 px-2.5">
            Playlists
          </button>
          <button className="bg-[#6b6a73] rounded-full py-1 px-2.5">
            Artists
          </button>
        </div>
        <div className="absolute inset-0 overflow-y-auto top-24 scrollbar-none hover:scrollbar scrollbar-track-transparent scrollbar-thumb-[#585858]">
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
