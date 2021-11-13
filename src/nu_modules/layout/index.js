import React from 'react'
import AgentResolver from './containers/'

const Layout = ({ type, opt, children }) => {
	return <AgentResolver type={type} opt={opt} subAgent={children} />
}

export default Layout
