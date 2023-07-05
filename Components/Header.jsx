import React from "react";
import { Link } from "react-router-dom";
import "../src/App.css";

const Header = () => {
  return (
    <div className="flex w-full h-20 bg-primary px-32 fixed top-0">
      <div className="flex items-center flex-1">
        <Link to="/">
          <div className="flex items-centerenter w-10 h-10">
            <img src="./images/Logo.svg" alt="" />
          </div>
        </Link>
      </div>
      <div className="flex-1">
        <ul className="flex justify-end items-center h-full gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
