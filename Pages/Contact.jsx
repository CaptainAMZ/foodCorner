import React from "react";
import {Form} from "../src/exports";

const Contact = ({ data, inputData, buttonData }) => {
  return (
    <div className="h-full flex">
      <div className="w-1/2">
        <img className="object-cover w-full h-full" src={data.image} alt="" />
      </div>
      <div className="w-1/2 flex items-start flex-col justify-center px-10 gap-5">
        <h1 className="title">{data.title}</h1>
        <Form link="/contact" data={inputData} buttonData={buttonData} />
      </div>
    </div>
  );
};

export default Contact;
