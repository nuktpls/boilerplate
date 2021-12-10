import { React } from '../dependencies'

const ABparagraph = (props) => (
	<div
		className={props.elementClass}
		dangerouslySetInnerHTML={{ __html: props.paragraph }}
	></div>
)

export default ABparagraph
