/*
  Export with named export to be able to pull in from library
*/

import React from 'react'
import LayoutResolver from './nu_modules/layout/containers'

const Layout = ({ type, opt, children }) => {
  return <LayoutResolver type={type} opt={opt} subAgent={children} />
}

export default Layout
