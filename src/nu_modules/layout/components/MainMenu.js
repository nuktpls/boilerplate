import React from 'react'

const MainMenu = ({ wrapperRef, isVisibleClass, arrayMenus }) => (
	<nav ref={wrapperRef} className={' main-nav menu-state-' + isVisibleClass}>
		<ul className="nav-menus">
			{arrayMenus.map((menu, index) => {
				if (menu.position === 'main-menu') {
					return (
						<li className="nav-links" key={index}>
							<a className="nav-main-link" href={menu.linkUrl}>
								{menu.text}
							</a>
						</li>
					)
				} else {
					return null
				}
			})}
		</ul>
	</nav>
)

export default MainMenu
