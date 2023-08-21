import React from 'react'
import { pageLinks, socialLinks } from "../data";
import Sociallinks from './Sociallinks';

export const Footer = () => {
  return (
    <footer className="section footer">
    <ul className="footer-links">
       {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="footer-link">
                  {link.text}
                  
                </a>
              </li>
            );
          })}

    </ul>
    <ul className="footer-icons">
    {socialLinks.map((link)=>{
                 
                 return(
                    <Sociallinks key={link.id} {...link} itemClass="footer-icon" />
                 )
            })}
        
    </ul>
    <p className="copyright">
      copyright &copy; Backroads App tours company 2023
      <span id="date"></span> all rights reserved
    </p>
  </footer>
  )
}
