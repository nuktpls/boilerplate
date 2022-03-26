import React from 'react'
import { Link } from 'gatsby'
import Layout from '..'
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
	NavMobile,
	Logo,
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
				<Logo />
				{mainMenuStatus === 'active' ? (
					<div
						className={'main-header main-header-' + menuActive}
						role="menubar"
					>
						<nav
							ref={wrapperRef}
							className={'main-nav menu-state-' + isVisibleClass}
							itemScope="itemScope"
							itemType="http://schema.org/SiteNavigationElement"
						>
							<ul
								className=""
								id="mainmenu"
								role="menu"
								aria-labelledby="check-toggle-icon"
							>
								<NavMobile isMobile={true} />
							</ul>
						</nav>
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
					<Logo />
					<nav
						className="main-nav desktop-only"
						id="site-navigation"
						itemScope="itemScope"
						itemType="http://schema.org/SiteNavigationElement"
					>
						<ul className="main-ul">
							<NavMobile isMobile={false} />
						</ul>
					</nav>
				</Layout>
			</Layout>
		</header>
	)
}

export default Header
