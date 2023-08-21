import React from "react";
import logo from "../images/logo.svg";
import {  socialLinks } from "../data";
import Sociallinks from "./Sociallinks";
import Navlinks from "./Navlinks";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
          <Navlinks />      

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <Sociallinks key={link.id} {...link} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};
