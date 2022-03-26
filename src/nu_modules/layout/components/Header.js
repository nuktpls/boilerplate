import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../../../'
import MainMenuContainer from '../containers/MainMenuContainer'
import MainMenuMobile from './MainMenuMobile'
import MainMenuList from './MainMenuList'
import layoutYAML from '@Content/configs/layout.yaml'
import mainMenuYAML from '@Content/menus/main-menu.yaml'

const Header = ({
  refState,
  handleRefState,
  mainMenu,
  logoComponent,
  logoSvg,
  logoUrl,
  menuActive,
  logo,
  wrapperRef,
}) => {
  const mainMenuItems = mainMenuYAML.menu.items
  const mainMenuStatus = mainMenuYAML.menu.status
  const { logo_url, link_01 } = layoutYAML.layout02

  return (
    <header>
      <Layout
        type="ROW"
        opt={{
          isBoxed: false,
          bgColor: '#e9e9ed',
          classes: 'mobile-header mobile-only',
        }}
      >
        {logo}
        {mainMenuStatus === 'active' ? (
          <div
            className={'main-header main-header-' + menuActive}
            role="menubar"
          >
            <MainMenuContainer
              wrapperRef={wrapperRef}
              refState={refState}
              mainMenuStatus={mainMenuStatus}
              isMobile={true}
            />
          </div>
        ) : null}
      </Layout>
      <Layout type="ROW" opt={{ bgColor: '#e9e9ed', isBoxed: false }}>
        <Layout
          type="ROW"
          opt={{
            isBoxed: true,
            classes: 'top-hibbon desktop-only',
            alignTo: 'right',
          }}
        >
          <p>
            <a href={link_01}>Login / Registre-se</a>
          </p>
        </Layout>
      </Layout>
      <Layout
        type="ROW"
        opt={{
          bgColor: '#f6f7fa',
          isBoxed: false,
          classes: 'header-logo-wrapper desktop-only',
        }}
      >
        <Layout type="ROW" opt={{ isBoxed: true, classes: 'header-logo' }}>
          {logo}
          <MainMenuContainer
            wrapperRef={wrapperRef}
            refState={refState}
            mainMenuStatus={mainMenuStatus}
            isMobile={false}
          />
        </Layout>
      </Layout>
    </header>
  )
}

export default Header
