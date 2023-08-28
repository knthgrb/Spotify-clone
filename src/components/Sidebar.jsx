import React, { useState } from "react";
import SidebarOption from "./SidebarOption";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import Playlist from "./Playlist";

const Sidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <div className="relative min-w-[300px] lg:min-w-[360px] pl-2 pr-2 pt-2 h-screen bg-[#040404]">
      <div className="bg-[#141414] h-30 rounded-lg p-5 space-y-5">
        <SidebarOption Option="Home" Icon={AiFillHome} />
        <SidebarOption Option="Search" Icon={FiSearch} />
      </div>
      <div className="bg-[#141414] relative h-[calc(100%-14rem)] mt-2 rounded-lg space-y-5">
        <div
          className={
            isScrolled
              ? "shadow-[0px_20px_20px_-15px_#050505] h-28 p-5 rounded-t-lg"
              : "h-28 p-5 rounded-t-lg"
          }
        >
          <div className="flex justify-between items-center">
            <SidebarOption Option="Your Library" Icon={VscLibrary} />
            <div className="hover:cursor-pointer hover:text-white rounded-full hover:bg-[#3d3838] text-gray-400 ease-in p-1">
              <AiOutlinePlus size="28" />
            </div>
          </div>
          <div className="flex gap-2 text-white font-medium mt-2">
            <button className="bg-[#242424] rounded-full py-1 px-2.5">
              Playlists
            </button>
            <button className="bg-[#242424] rounded-full py-1 px-2.5">
              Artists
            </button>
          </div>
        </div>
        <div
          onScroll={handleScroll}
          className="absolute inset-0 overflow-x-hidden overflow-y-auto top-[5.7rem] rounded-b-lg scrollbar-none hover:scrollbar scrollbar-track-transparent scrollbar-thumb-[#585858]"
        >
          <Playlist />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
