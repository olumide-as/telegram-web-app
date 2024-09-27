import React from "react";

const DailyTask = ({ logo, title, text, buttontext }) => {
  return (
    <div className="flex items-center justify-between w-full p-4 my-2 bg-[#422751] rounded-xl">
      <img src={logo} alt="Logo" className="w-10 h-10" />
      <div className="flex flex-col">
      <p className="text-sm text-white flex-grow text-left px-4">{title}</p>
      <p className="text-sm text-white flex-grow text-left px-4">{text}</p>
      </div>

      <button className="bg-white text-[#210133] px-8 py-2 rounded-lg">
        {buttontext}
      </button>
    </div>
  );
};

export default DailyTask;
