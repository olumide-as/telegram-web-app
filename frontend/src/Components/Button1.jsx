import React from "react";

const Button1 = ({ image, text }) => {
  return (
    <div>
      <button className="w-full bg-white rounded-2xl flex items-center justify-center p-2">
        <img src={image} alt="button-image" className="w-6 mr-2" />
        <p className="text-xs">{text}</p>
      </button>
    </div>
  );
};

export default Button1;
