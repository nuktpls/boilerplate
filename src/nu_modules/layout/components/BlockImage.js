import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlockImage = ({ opt }) => {
	const image =
		opt.queryCard && typeof opt.queryCard === 'object'
			? getImage(opt.queryCard.childrenImageSharp[0])
			: !opt.queryCard
			? null
			: getImage(opt.queryCard)
	if (!image) {
		return null
	}
	return (
		<>
			{opt.hasLink ? (
				<>
					<Link to={opt.link} tabIndex="0">
						<GatsbyImage
							image={image}
							alt={opt.alt}
							placeholder={opt.placeholder}
							critical="true"
							className={opt.classes}
						/>
					</Link>
				</>
			) : (
				<GatsbyImage
					image={image}
					alt={opt.alt}
					placeholder={opt.placeholder}
					critical="true"
					className={opt.classes}
				/>
			)}
		</>
	)
}

export default BlockImage
