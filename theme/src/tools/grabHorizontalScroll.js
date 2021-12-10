const grabHorizontalScroll = (wrapperRef) => {
	// const slider = document.querySelector(wrapperRef.current.parentElement)
	if (!wrapperRef) {
		return null
	}
	// console.log(classCurrent[1])
	console.log('wrapperRefwrapperRefwrapperRefwrapperRefwrapperRef')
	console.log(wrapperRef)
	console.log('wrapperRefwrapperRefwrapperRefwrapperRefwrapperRef')
	// const classCurrent = wrapperRef.split(' ')
	// const sliderClass =
	// 	qSel === true ? '.artist-profiles-list' : '.collector-profiles-list'
	const slider = document.querySelector('.' + wrapperRef)
	// classCurrent[1].classList.add('active')
	let isDown = false
	let startX
	let scrollLeft
	if (slider) {
		slider.addEventListener('mousedown', (e) => {
			isDown = true
			slider.classList.add('active')
			startX = e.pageX - slider.offsetLeft
			scrollLeft = slider.scrollLeft
		})
		slider.addEventListener('mouseleave', () => {
			isDown = false
			slider.classList.remove('active')
		})
		slider.addEventListener('mouseup', () => {
			isDown = false
			slider.classList.remove('active')
		})
		slider.addEventListener('mousemove', (e) => {
			if (!isDown) return
			e.preventDefault()
			const x = e.pageX - slider.offsetLeft
			const walk = (x - startX) * 3 //scroll-fast
			slider.scrollLeft = scrollLeft - walk
		})
	}
}

export default grabHorizontalScroll
