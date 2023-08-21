import React from "react";
import { RxAvatar } from "react-icons/rx";
import { useDataLayer } from "../stores/useDataLayer";

const BodyHeader = () => {
  const { user } = useDataLayer();

  return (
    <div className="relative flex justify-end items-center gap-4 p-5">
      <div className="ring-inset-0 ring peer ring-black rounded-full">
        <RxAvatar size="30" color="gray" />
      </div>
      <p className="absolute mr-10 bg-black text-[15px] py-1.5 hidden peer-hover:block px-3.5 rounded-full">
        {user?.display_name}
      </p>
    </div>
  );
};

export default BodyHeader;
