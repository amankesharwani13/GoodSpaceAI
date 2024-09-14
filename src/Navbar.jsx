import React, {useState}from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";
import { Button } from "./styles/Button";
import "./styles/Navbar.scss";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
    <div className="navbar">
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
          <ul className="navbar-list">
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/feature"
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/pricing"
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                className="navbar-link"
                onClick={() => setOpenMenu(false)}
                to="/integrations"
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
    </div>
    </>
  );
};

export default Navbar;
