import React from 'react'

const PageLinks = () => {
  return (
    <div>
       <li key={link.id}>
          <a href={link.href} className={itemClass}>
            {link.text}
          </a>
        </li>
    </div>
  )
}

export default PageLinks
