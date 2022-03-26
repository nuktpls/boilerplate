// eslint-disable-next-line
import React from 'react'

const Body = ({ children, customClasses, bgImage }) => (
	<div
		className={`descola-tema ${customClasses}`}
		style={{
			backgroundImage: `url(${bgImage ? bgImage.src : ' '})`,
		}}
	>
		{children}
	</div>
)
export default Body
