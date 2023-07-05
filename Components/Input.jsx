import React from "react";

const Input = ({ label, placeHolder, type }) => {
  return (
    <label className="flex flex-col text-left subtitle text-gray-400 gap-2">
      {label}
      {type === "input" ? (
        <input
          className="inputs"
          type="text"
          placeholder={placeHolder}
        />
      ) : (
        <textarea
          className="inputs"
          cols="30"
          rows="2"
          placeholder={placeHolder}
        ></textarea>
      )}
     
    </label>
  );
};

export default Input;
