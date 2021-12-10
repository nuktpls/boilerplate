import { React } from '../dependencies'

const ABlink = (props) => (
	<a className={props.elementClass} href={props.link}>
		{props.linkText}
	</a>
)

export default ABlink
