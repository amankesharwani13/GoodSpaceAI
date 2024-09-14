import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import "./styles/Header.scss";
const Header = () => {
  return (
    <>
      <div className="mainheader">
        <NavLink to="/">
          <img src="./images/Frame484821.png" alt="logo" className="logo" />
        </NavLink>
        <Navbar />
      </div>
    </>
  );
};

export default Header;
