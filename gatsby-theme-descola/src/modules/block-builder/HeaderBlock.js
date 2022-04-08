import React from 'react'
import Layout from 'gatsby-layout-builder'

const HeaderBlock = ({ title, debug = false, logotipoImg, logotipoSvg }) => {
  return (
    <Layout
      type="HEADER"
      opt={{
        mainMenu: true,
        logoSvg: logotipoSvg,
        logoUrl: 'https://descola.org/',
      }}
    />
  )
}

export default HeaderBlock
