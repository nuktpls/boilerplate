import React from 'react'

const Header = ({ subAgent }) => (
  <header>
    <div className="footer-container-wrapper">
      <div className="footer-container">{subAgent}</div>
    </div>
  </header>
)

export default Header
