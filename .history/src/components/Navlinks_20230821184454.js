import React from 'react'

const Navlinks = () => {
  return (
    <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
  )
}

export default Navlinks
