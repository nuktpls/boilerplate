import { React } from '../dependencies'

const ABimg = (props) => (
	<img
		className={props.elementClass}
		srcSet={props.srcSet}
		sizes={props.sizes}
		src={props.src}
		alt={props.alt}
	/>
)

export default ABimg
