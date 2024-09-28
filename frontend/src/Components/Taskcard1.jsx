import React from "react";

const Taskcard1 = ({ image, text, points, btext }) => {
  return (
    <div className="flex flex-col justify-between h-full border border-amber-400 rounded-xl text-white">
      <div className="p-2">
        <img src={image} alt="card image" className="m-auto w-12 my-2" />
        <p className="text-sm">{text}</p>
        <p className="text-[#FEC95E] text-xs">{points} </p>
      </div>
      <button className="mt-auto p-2 bg-gradient-to-b from-[#F0D377] to-[#F1A35F] text-[#210133] w-full rounded-b-xl font-bold text-xs">
        {btext}
      </button>
    </div>
  );
};

export default Taskcard1;
