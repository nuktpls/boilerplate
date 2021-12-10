import { React } from '../dependencies'

const ABheading = (props) => (
	<h2
		className={props.elementClass}
		style={{
			fontSize: props.fontSize,
			color: props.fontColor,
		}}
	>
		{props.heading}
	</h2>
)

export default ABheading
