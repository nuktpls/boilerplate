import React from 'react'
const ABmainwrappercontainer = ({
	children,
	classWrapper,
	alignTo,
	gridClass,
	basis,
}) => (
	<div className={gridClass} style={{ flexBasis: basis + '%' }}>
		{children}
	</div>
)

export default ABmainwrappercontainer
