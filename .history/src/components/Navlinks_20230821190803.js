import React from "react";
import { pageLinks } from "../data";
import PageLinks from "./PageLinks";


const Navlinks = ({parentClass, itemClass}) => {
  return (
    <ul className={parentClass} id="nav-links">
    {pageLinks.map((link) => {
      return (
       <PageLinks key={link.id} {...link} itemClass={itemClass} />
      );
    })}
  </ul>
  );
};

export default Navlinks;
