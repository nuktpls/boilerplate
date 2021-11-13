import React from 'react'
import InsertHTML from '../tools/InsertHTML'
const Row = ({ subAgent, params, opt, bgOpt, bgImg }) => (
	<InsertHTML
		type="row"
		subAgent={subAgent}
		params={params}
		opt={opt}
		bgOpt={bgOpt}
		bgImg={bgImg}
	/>
)

export default Row
