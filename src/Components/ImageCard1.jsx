import React from "react";

const ImageCard1 = ({ image, text, title }) => {
  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden w-full h-64">
        <img
          src={image}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-2">
          <p className="text-sm">{title}</p>
          <p className="text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard1;
