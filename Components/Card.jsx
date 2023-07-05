import React from "react";

const Card = ({name, price, image }) => {
  return (
      <div className="w-[250px] h-[260px] min rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="h-[65%]">
          <img className="object-cover w-full h-full" src={image} alt="" />
        </div>
        <div className="h-[35%] text-left text-black px-4 py-2 space-y-2">
          <h3 className="font-bold text-2xl">{name}</h3>
          <p className="font-medium text-lg">{price}</p>
        </div>
      </div>
  );
};

export default Card;
