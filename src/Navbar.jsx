import React from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { Button } from "./styles/Button";
import "./styles/Navbar.scss";

const Navbar = () => {

  return (
    <>
      <div className="navbar">
          <ul className="navbar-list">
            <li>
              <NavLink
                className="navbar-link"
                to=""
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                to=""
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                to=""
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                to=""
              >
                Integrations
              </NavLink>
            </li>
            <Button>Start trial</Button>
          </ul>
          <div className="mobile-navbar-btn">
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setOpenMenu(true)}
            />
            <CgCloseR
              name="close-outline"
              className="close-outline mobile-nav-icon"
              onClick={() => setOpenMenu(false)}
            />
          </div>
      </div>
    </>
  );
};

export default Navbar;
