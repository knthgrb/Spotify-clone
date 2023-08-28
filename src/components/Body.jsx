import React from "react";
import BodyHeader from "./BodyHeader";

const Body = () => {
  return (
    <div className="basis-[75%] bg-[#040404] pt-2 pr-2">
      <div
        // style={{
        //   background:
        //     "linear-gradient(rgba(10, 115, 26, 0.8) 0%, rgb(20, 20, 20) 45%, rgb(20, 20, 20) 100%)",
        // }}
        className=" text-white h-[calc(100%-5.9rem)] rounded-lg bg-[#282828]"
      >
        <BodyHeader />
        <h1 className="p-5 text-[50px]">
          PASS SA ANG HOMEPAGE, KAPOY NA HAHAHA
        </h1>
      </div>
    </div>
  );
};

export default Body;
