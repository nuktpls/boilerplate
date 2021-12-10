import React from 'react'
// /* eslint-disable */
// export default function abinfo(titleHere) {
// 	if (!titleHere) {
// 		return null
// 	}
// 	// const classCurrent = titleHere
// 	const abblock = document.querySelector('.' + titleHere)
// 	if (!abblock) {
// 		return null
// 	}
// 	// console.log('ESSE É A CLASSE')
// 	// console.log(abblock)
// 	return {
// 		topDocumentDistance: abblock.offsetTop,
// 		bottomDocumentDistance: abblock.offsetTop + abblock.offsetHeight,
// 		leftDocumentDistance: abblock.offsetLeft,
// 		rightDocumentDistance: abblock.offsetLeft + abblock.offsetWidth,
// 		blockHeight: abblock.offsetHeight,
// 		blockWidth: abblock.offsetWidth,
// 	}
// }

import { useEffect } from 'react'

const useAbinfo = (titleHere) => {
	console.log(titleHere)
	let allQueryInfos = null
	function handelSetInfo(query) {
		if (!query) {
			return null
		}
		allQueryInfos = {
			topDocumentDistance: query.offsetTop,
			bottomDocumentDistance: query.offsetTop + query.offsetHeight,
			leftDocumentDistance: query.offsetLeft,
			rightDocumentDistance: query.offsetLeft + query.offsetWidth,
			blockHeight: query.offsetHeight,
			blockWidth: query.offsetWidth,
		}
		return allQueryInfos
	}
	const abblock = document.querySelector('.' + titleHere)

	useEffect(() => {
		if (titleHere && abblock)
			document.addEventListener('onReady', handelSetInfo(abblock))

		return () => {
			if (titleHere && abblock)
				document.removeEventListener('onReady', handelSetInfo(abblock))
		}
	})
	// console.log('titleHere')
	// console.log(titleHere)
	// return <>{console.log(allQueryInfos)}</>
	return <>oi</>
}

export default useAbinfo
