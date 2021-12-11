import React, { useEffect, setState, useState } from 'react'
import submitChooser from './handle-submit-chooser'
import handleMessages from './handle-messages'
import handleEmailChange from './handle-input-email'
import handlePwdChange from './handle-input-pwd'
import handleHoneypotChange from './handle-input-honeypot'
import handleSuccess from './handle-success'
const handles = (key, e, value, usefulEmail, usefulHoney) => {
	// const handleMcRes = (msgReceived, resReceived) => {
	// 	setMcRes(resReceived)
	// 	handleMsg(msgReceived, resReceived)
	// 	handleSuccess(resReceived)
	// }

	// handleSuccess(setSuccess(msg))

	// handleMessages(msg, setMsg)

	// handleEmailChange(setEmail(value))

	// handleHoneypotChange(setHoney(value))

	// submitChooser(email, pwd, honey)

	switch (key) {
		case 'pwd':
			return pwd
		case 'email':
			return email
		case 'honey':
			return honey
		case 'msg':
			return msg
		case 'success':
			return success
		case 'handleSuccess':
			return handleSuccess(setSuccess(msg))
		case 'handleSubmit':
			return submitChooser(email, pwd, honey)
		case 'handleMsg':
			return 'handleMsg'
		case 'handleEmailChange':
			return setEmail(value)
		case 'handlePwdChange':
			return handlePwdChange
		case 'handleHoneypotChange':
			return handleHoneypotChange(setHoney(value))
		case 'handleMcRes':
			return handleMcRes
		default:
			return console.log('eiiiita')
	}
}

export default handles
