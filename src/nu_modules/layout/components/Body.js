// eslint-disable-next-line
import React from 'react'

const Body = ({ children, customClasses, bgImage }) => (
  <div
    className={`atomic-body ${customClasses}`}
    style={{
      backgroundImage: `url(${bgImage.src})`,
    }}
  >
    {children}
  </div>
)
export default Body
