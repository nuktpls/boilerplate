/*
  Export with named export to be able to pull in from library
*/

import React from 'react'
import AgentResolver from './src/nu_modules/layout/containers'

const Layout = ({ type, opt, children }) => {
	return <AgentResolver type={type} opt={opt} subAgent={children} />
}

export default Layout
