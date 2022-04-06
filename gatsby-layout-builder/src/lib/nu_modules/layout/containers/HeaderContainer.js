import React, { useState, useRef } from 'react'
// import layoutYAML from '@Content/configs/layout.yaml'
import { Link } from 'gatsby'
import Header from '../components/Header'

const HeaderContainer = ({ logo, opt }) => {
  const [refState, setRefState] = useState(false)
  const wrapperRef = useRef(null)

  function handleRefState() {
    setRefState(!refState)
  }

  const logoHeader = opt ? opt.logoHeader : null
  const hasMainMenu = opt ? opt.mainMenu : null

  const menuActive = refState ? 'visible' : 'not-visible'
  // const mainMenuItems = mainMenuYAML.menu.items
  const { logo_url } = null

  const logotype = logo_url ? (
    <a href={logo_url} className="logo-link">
      {opt.logoSvg}
    </a>
  ) : (
    <Link to="/" className="logo-link">
      {opt.logoSvg}
    </Link>
  )
  return (
    <Header
      // logo={logo}
      logoSvg={opt.logoSvg}
      refState={refState}
      handleRefState={handleRefState}
      logoComponent={logoHeader}
      mainMenu={hasMainMenu}
      logoUrl={opt.logoUrl}
      menuActive={menuActive}
      logo={logotype}
      wrapperRef={wrapperRef}
    />
  )
}
export default HeaderContainer
