import React from 'react'

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
