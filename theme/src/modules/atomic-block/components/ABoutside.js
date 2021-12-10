import { React } from '../dependencies'

import InsertHTML from '../../../tools/InsertHTML'

const ABoutside = ({ children, params, opt }) => (
	<InsertHTML
		type={params.gridType}
		params={params}
		opt={opt}
		children={children}
	/>
)

export default ABoutside
