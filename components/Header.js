import React from 'react'
import { Link } from 'gatsby'
import { GiHamburgerMenu } from 'react-icons/gi'

import MenuContainer from '../containers/MenuContainer'

const Header = ({ refState, handleRefState, logoComponent, isRefVisible }) => (
	<header>
		<div className={' main-header main-header-' + isRefVisible}>
			<div className="header-columns">
				<Link to="/" className={' logo-link logo-link-' + isRefVisible}>
					{logoComponent}
				</Link>
			</div>
			<MenuContainer refState={refState} handleRefState={handleRefState} />
			<div className="header-columns toggle-menu">
				<input
					type="checkbox"
					id="check-toggle-icon"
					onChange={handleRefState}
				/>
				<label
					htmlFor="check-toggle-icon"
					className={'menu-wrapper ' + isRefVisible}
				>
					<div className="menu-bar-icon mobile-only">
						<GiHamburgerMenu className="hamburger-icon " />
					</div>
				</label>
			</div>
		</div>
	</header>
)

export default Header
