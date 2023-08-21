import React from "react";
import {  socialLinks } from "../data";
import Sociallinks from "./Sociallinks";
import Navlinks from "./Navlinks";

export const Footer = () => {
  return (
    <footer className="section footer">
     
        <Navlinks parentClass="footer-links"  itemClass="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <Sociallinks key={link.id} {...link} itemClass="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads App tours company 2023
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};
