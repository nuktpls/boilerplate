import React from 'react'

const ABwrapprecarousel = ({
	classWrapper,
	secondClass,
	gridClass,
	basis,
	children,
}) => (
	<div className={classWrapper}>
		<ul className={secondClass}>
			<li
				className={gridClass}
				style={{ flexBasis: basis + '%', minWidth: basis + '%' }}
			>
				{children}
			</li>
		</ul>
	</div>
)
export default ABwrapprecarousel
