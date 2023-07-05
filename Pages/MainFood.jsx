import React, { useState } from "react";
import { Button, Card } from "../src/exports";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
let mainFood;

const MainFood = ({ data }) => {
  const params = useParams();
  if (params.id <= data.cards.length) {
    mainFood = data.cards.findIndex((item) => item.id == params.id);
  } else {
    return <Navigate to="/menu" />;
  }

  return (
    <div className="h-full  flex justify-center items-center flex-col gap-5">
      <div className="bg-primary  flex justify-center p-[60px] rounded-lg ">
        <Card {...data.cards[mainFood]} />
      </div>
      <Button link="/menu" text="Buy" />
    </div>
  );
};

export default MainFood;
