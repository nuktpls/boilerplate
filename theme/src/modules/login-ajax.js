import { useCallback, useEffect } from 'react'
import submitHandler from './containers/submit-handler-container'
import fadeIn from './containers/fade-in-container'
import onLoadResponse from './containers/on-load-response-container'
import config from '../modules/config/login-form'

const LoginAjaxRequest = () => {
	// declare vars
	const button = document.getElementById(config.button)
	// go click in config.button

	const cookieSignup = document.cookie
		? document.cookie.includes('signUp=true')
		: null
	if (cookieSignup && cookieSignup[1] === true) {
		document.getElementById('wp-submit').removeAttribute('disabled')
	}
	const handleUserClick = useCallback((event) => {
		event.preventDefault()
		const inputUser = document.getElementById(config.userInput)
		const inputPwd = document.getElementById(config.passwordInput)
		const errorElement = document.getElementById(config.errorElement)
		const data = {
			user: inputUser.value,
			pwd: inputPwd.value,
			action: config.action,
		}
		// block empty value
		if (inputUser.value === '') {
			// config n fade in error
			errorElement.innerText = config.userWarn
			return fadeIn(errorElement, 600)
		}
		// block empty value
		if (inputPwd.value === '') {
			// config n fade in error
			errorElement.innerText = config.pwdWarn
			return fadeIn(errorElement, 600)
		}
		// declare the submit function
		const submitHandlerConst = submitHandler(config, data)
		// submit.onload XMLHttpRequest function
		// on load request response
		onLoadResponse(submitHandlerConst, config, errorElement)
	})
	console.log(config.button)
	// useEffect(() => {
	// 	button.addEventListener('click', (e) => handleUserClick(e))
	// 	return () => {
	// 		button.removeEventListener('click', (e) => handleUserClick(e))
	// 	}
	// }, [handleUserClick])
	// say what ?
	return
}

export default LoginAjaxRequest
