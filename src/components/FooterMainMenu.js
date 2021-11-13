import React from 'react'

const FooterMainMenu = ({ wrapperRef, isVisibleClass }) => (
	<nav
		ref={wrapperRef}
		className={' main-nav-footer menu-footer-state-' + isVisibleClass}
	>
		<ul className="nav-footer-menus">
			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/milteam">
					Item footer
				</a>
			</li>
			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/sistema-bolonha">
					Item footer
				</a>
			</li>
		</ul>

		<ul className="nav-menus">
			<li className="nav-links">
				<a className="nav-footer-main-link" href="/wiki/preparacao">
					Item footer
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-footer-main-link" href="/wiki/conte-uma-historia">
					Item footer
				</a>
			</li>

			<li className="nav-links">
				<a className="nav-footer-main-link" href="/wiki/tom-aviso">
					Item footer
				</a>
			</li>
		</ul>
		<ul className="nav-footer-menus">
			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/home">
					Item footer
				</a>
			</li>
			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/instrucoes-iniciais">
					Item footer
				</a>
			</li>

			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/panorama-telas">
					Item footer
				</a>
			</li>
			<li className="nav-footer-links">
				<a className="nav-footer-main-link" href="/wiki/arquivos-documentos">
					Item footer
				</a>
			</li>
		</ul>
	</nav>
)

export default FooterMainMenu
