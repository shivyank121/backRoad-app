import React from 'react'

const PageLinks = ({link, itemClass}) => {
  return (
    <div>
       <li>
          <a href={link.href} className={itemClass}>
            {link.text}
          </a>
        </li>
    </div>
  )
}

export default PageLinks
