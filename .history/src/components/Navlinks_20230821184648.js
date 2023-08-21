import React from "react";

const Navlinks = ({ href, text, navItemClass }) => {
  return (
    <li>
      <a href={href} className={navItemClass}>
        {text}
      </a>
    </li>
  );
};

export default Navlinks;
