import React from "react";

const Taskcard2 = ({logo, text, buttontext}) => {
  return (
<div className="flex items-center justify-between w-full p-2">
  <img src={logo} alt="Logo" className="w-10 h-10" />
  <p className="text-sm text-white flex-grow">{text}</p>
  <button className="bg-[#FEC95E] text-[#210133] px-8 py-2 rounded-lg">
    {buttontext}
  </button>
</div>
  );
};

export default Taskcard2;
