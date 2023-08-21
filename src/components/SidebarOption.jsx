import React from "react";

const SidebarOption = ({ Option, Icon }) => {
  return (
    <div className="flex items-center gap-x-5 text-gray-300 hover: cursor-pointer hover:text-white font-medium">
      <Icon size="30" />
      {Option}
    </div>
  );
};

export default SidebarOption;
