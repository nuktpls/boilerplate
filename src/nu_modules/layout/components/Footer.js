import React from 'react'

// import SocialInfos from './SocialInfos'
// import {
// 	RiInstagramFill,
// 	RiYoutubeFill,
// 	RiTwitterFill,
// 	RiFacebookCircleFill,
// } from 'react-icons/ri'

const Footer = ({ children, opt }) => (
	<footer>
		<div className="container footer-container">
			<div className="text-center">
				{/* <SocialInfos
					facebook={opt.social.facebook}
					twitter={opt.social.twitter}
					instagram={opt.social.instagram}
					youtube={opt.social.youtube}
					iconFace={<RiFacebookCircleFill />}
					iconTwitter={<RiTwitterFill />}
					iconInsta={<RiInstagramFill />}
					iconUTube={<RiYoutubeFill />}
				/> */}
				{children}
			</div>
		</div>
	</footer>
)

export default Footer
