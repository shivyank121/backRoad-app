import React from 'react'

const PageLinks = ({href,text}) => {
  return (
    <div>
       <li>
          <a href={href} >
            {text}
          </a>
        </li>
    </div>
  )
}

export default PageLinks
