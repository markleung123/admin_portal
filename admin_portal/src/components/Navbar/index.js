import React from "react";
import { NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import "./index.css";

const onNavbarClick = (link) => {
  window.location.href = link;
  // return false;
};

const Navbar = () => {
  return (
    <>
      <nav className="content">
        <h1>Popared</h1>
      </nav>
      <nav className="navbar">
        <Bars />

        <NavMenu>
          <div className="navbar__link" onClick={() => onNavbarClick("/about")}>
            Projects
          </div>
          <div className="navbar__link" onClick={() => onNavbarClick("/about")}>
            Submissions
          </div>
          <div
            className="navbar__link"
            onClick={() => onNavbarClick("/brands")}
          >
            Brands
          </div>
          <div
            className="navbar__link"
            onClick={() => onNavbarClick("/creators")}
          >
            Creators
          </div>
          <div className="navbar__link" onClick={() => onNavbarClick("/about")}>
            Creator Payment
          </div>
          <div className="navbar__link" onClick={() => onNavbarClick("/about")}>
            InstagramData
          </div>
          <div className="navbar__link" onClick={() => onNavbarClick("/about")}>
            Keywords
          </div>
          <div className="navbar__link" onClick={() => onNavbarClick("/about")}>
            Blacklist
          </div>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Logout</NavBtnLink>
        </NavBtn>
      </nav>
    </>
  );
};

export default Navbar;
