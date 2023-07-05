import React from "react";
import { Card } from "../src/exports";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {data.map((item) => (
        <Link key={item.id} to={`${item.id}`}>
          <Card {...item} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
