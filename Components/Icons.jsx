import React from "react";
import Icon from "./Icon";
const Icons = ({ images }) => {
  return (
    <div className="flex gap-8 items-center justify-center">
      {images.map((image) => (
        <Icon key={Object.keys(image)} icon={Object.values(image)} />
      ))}
    </div>
  );
};

export default Icons;
