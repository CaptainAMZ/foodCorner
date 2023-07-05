import React from "react";
import {Button} from "../src/exports"

const Home = ({data , btnData}) => {
  return (
    <div className="bg-img-home h-full bg-cover bg-center">
      <div className="container m-auto flex h-full items-start justify-center flex-col gap-5">
        <h1 className="font-bold text-7xl">{data.title}</h1>
        <p className="font-semibold text-3xl">{data.subtitle}</p>
        <Button link="/menu" text={btnData}></Button>
      </div>
    </div>
  );
};

export default Home;
