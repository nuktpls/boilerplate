import { React } from '../dependencies'

import ABmodal from './ABmodal'

import slugify from '@tools/slugify'

const InsertHTML = ({ type, params }) => {
	// const elementClass = (opt) ? opt.elementClass : type

	switch (type) {
		case 'form':
			if (
				params.form &&
				params.formID &&
				params.textButton &&
				params.heading &&
				params.buttonColor &&
				params.textButtonColor &&
				params.tksMsg
			) {
				const formIdSlug = slugify(params.formID)
				const visibleClassState = params.refState ? 'visible' : 'not-visible'

				return (
					<>
						<ABmodal
							handleRefState={params.handleRefState}
							wrapperRef={params.wrapperRef}
							visibleClassState={visibleClassState}
							modalBackgroundColor={params.modalBackgroundColor}
							heading={params.heading}
							modalText={params.modalText}
							formID={params.formID}
							formIdSlug={formIdSlug}
							form={params.form}
							buttonColor={params.buttonColor}
							textButtonColor={params.textButtonColor}
							textButton={params.textButton}
						/>
					</>
				)
			} else {
				return null
			}
		// case 'block':
		//   if (

		//     params

		//     ) {

		//       const basis = 100/params.numColumns

		//       const ItemTag = () => (
		//         (params.gridType==='carousel') ?
		//         <li   className={ params.gridClass }>{ children }</li>  :
		//         <div  className={ params.gridClass }
		//             style={{ flexBasis: basis + '%' }}
		//         >{ children }</div>
		//       )

		//       const formId = slugify(params.formID)
		//       const visibleClassState = (params.refState ? 'visible' : 'not-visible')

		//       const addParams = {
		//         'altHolder': (params.alt) ? params.alt : "image desciption",
		//         'elementClass': elementClass,
		//         'wrapperClass': "grid-" + params.gridType + " " + elementClass,
		//         'listClass': "grid-"+ params.gridType +"-list " + elementClass + "-list no-pdd-mrg-first-last-child",
		//         'ItemTag': ItemTag || null,
		//         'formId': formId || null,
		//         'visibleClassState': visibleClassState || null
		//       }

		//       const finalParams = Object.assign( params, addParams )

		//     return(

		//       <ABcard params={ finalParams } />

		//     )
		//   }else{
		//     return null
		//   }
		default:
			return null
	}
}

export default InsertHTML
