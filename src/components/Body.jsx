import React, { useEffect, useState } from "react";
import BodyHeader from "./BodyHeader";
import PlaylistCard from "./PlaylistCard";
import { useDataLayer } from "../stores/useDataLayer";

const Body = () => {
  const { playlist } = useDataLayer();
  const [greeting, setGreeting] = useState("Good morning");

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 12 && hours < 17) {
      setGreeting("Good afternoon");
    } else if (hours >= 17) {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <div className="relative w-full bg-[#040404]">
      <div
        style={{
          background:
            "linear-gradient(rgba(20, 9, 51, 0.8) 0%, rgb(25, 25, 25) 50%)",
        }}
        className="text-white h-[calc(100%-6.5rem)] mr-2 mt-2 rounded-lg absolute overflow-x-hidden inset-0 overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-[#585858]"
      >
        <BodyHeader />
        <h1 className="text-[30px] mb-5 ml-7 font-bold">{greeting}!</h1>
        <ul className="flex flex-wrap gap-y-12 gap-x-1 justify-evenly">
          {playlist[0]?.items?.map((items) => (
            <PlaylistCard
              title={items.name}
              key={items.id}
              playlistId={items.id}
              owner={items.owner.display_name}
              image={items.images[0].url}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Body;
