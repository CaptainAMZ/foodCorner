import React from "react";
import {Cards} from "../src/exports";

const Menu = ({data}) => {
  return (
    <div className="h-full bg-amber-100 flex justify-center items-center wrap">
      <div className="container space-y-10 pt-10">
        <h1 className="title">{data.title}</h1>
        <Cards data={data.cards} />
      </div>
    </div>
  );
};

export default Menu;
