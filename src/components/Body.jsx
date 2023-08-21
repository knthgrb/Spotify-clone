import React from "react";
import BodyHeader from "./BodyHeader";

const Body = () => {
  return (
    <div className="basis-[78%] bg-[#040404] pt-1.5 pr-1.5">
      <div
        style={{
          background:
            "linear-gradient(rgba(75, 31, 66, 0.6) 0%, rgb(40, 40, 40) 100%)",
        }}
        className=" text-white h-[calc(100%-5.9rem)] rounded-lg bg-[#282828]"
      >
        <BodyHeader />
      </div>
    </div>
  );
};

export default Body;
