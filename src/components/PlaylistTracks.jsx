import React from "react";
import BodyHeader from "./BodyHeader";
import { RxAvatar } from "react-icons/rx";
import { AiFillPlayCircle } from "react-icons/ai";
import Tracks from "./Tracks";
import styled from "styled-components";
import { useDataLayer } from "../stores/useDataLayer";

const StyledScrollableDiv = styled.div`
  ::-webkit-scrollbar {
    width: 17px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: #585858;
  }
`;

const PlaylistTracks = ({}) => {
  const { selectedPlaylistId } = useDataLayer();

  const isLongTitle = selectedPlaylistId?.data?.name.length > 20;

  return (
    <div className="w-full bg-[#040404] pt-2 pr-2">
      <StyledScrollableDiv className="relative bg-[#141414] text-white h-[calc(100%-5.9rem)] rounded-lg overflow-y-auto">
        <div className="absolute overflow-x-hidden inset-0">
          <div
            style={{
              background:
                "linear-gradient(rgba(111, 106, 106, 0.8) 0%, rgb(25, 25, 25) 100%)",
            }}
            className="h-[21rem] relative"
          >
            <BodyHeader />

            <div className="absolute bottom-0 flex p-7 gap-5">
              <img
                className="lg:h-60 lg:w-60 h-40 w-40 lg:mt-0 mt-20 shadow-[10px_0px_90px_-10px_#050505]"
                src={selectedPlaylistId?.data?.images[0]?.url}
              />
              <div className="flex flex-col justify-end">
                <p className="font-medium md:text-[13px] text-[10px] capitalize">
                  {selectedPlaylistId?.data?.type}
                </p>
                <h1
                  className={`leading-tight ${
                    isLongTitle
                      ? "lg:text-[45px] md:text-[28px]"
                      : "xl:text-[75px] lg:text-[70px] md:text-[50px] text-[25px]"
                  } font-bold mb-4`}
                >
                  {selectedPlaylistId?.data?.name}
                </h1>
                <div className="flex flex-col md:flex-row w-48 md:w-[26rem] md:items-center gap-2 md:text-[13px] text-[10px] font-medium ">
                  <p className="flex items-center gap-1.5">
                    <RxAvatar size="25" color="gray" />
                    {selectedPlaylistId?.data?.owner?.display_name} -
                  </p>
                  <p>{selectedPlaylistId?.data?.tracks?.total} songs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <AiFillPlayCircle size="65" color="#1DB954" />
          </div>
          <div className="pl-7 pr-7">
            <Tracks />
          </div>
        </div>
      </StyledScrollableDiv>
    </div>
  );
};

export default PlaylistTracks;
