// eslint-disable-next-line
import React from 'react'

const Body = ({ children, customClasses, bgImage }) => {
  const bgStyle = bgImage?.src
    ? {
        backgroundImage: `url(${bgImage?.src || ' '})`,
      }
    : { backgroundImage: 'unset' }
  return (
    <div className={`boilerplate ${customClasses}`} style={bgStyle}>
      {children}
    </div>
  )
}
export default Body
