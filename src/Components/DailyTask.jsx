import React from "react";

const DailyTask = ({ logo, title, text, buttontext, shareUrl }) => {
  return (
    <div className="flex items-center justify-between w-full p-4 my-2 bg-[#422751] rounded-xl">
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-10 h-10" />

      {/* Title and Text */}
      <div className="flex flex-col">
        <p className="text-sm text-white flex-grow text-left px-4">{title}</p>
        <p className="text-sm text-white flex-grow text-left px-4">{text}</p>
      </div>

      {/* Button with onClick that opens Telegram */}
      <button
        className="bg-white text-[#210133] px-8 py-2 rounded-lg"
        onClick={() => window.open(shareUrl, "_blank")}
      >
        {buttontext}
      </button>
    </div>
  );
};

export default DailyTask;
