const submitChooser = async (email, pwd, honey, handleMcRes) => {
	e.preventDefault()
	honey ||
		// (await addToMailchimp(email).then(({ msg, result }) => {
		// 	handleMcRes(msg, result)
		// }))
		console.log({
			email,
			pwd,
			honey,
		})
}

export default submitChooser
