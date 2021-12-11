import React, { useEffect, setState, useState } from 'react'
import LoginAjaxRequest from '../login-ajax'
import config from '../config/login-form'

const successHTMLstyle = {
	color: 'green',
	fontWeight: 900,
	marginBottom: 0,
}
const errorHTMLstyle = {
	color: 'red',
	marginBottom: 0,
	fontWeight: 900,
}

const listItemStyles = {
	fontWeight: 300,
	fontSize: 18,
	maxWidth: 760,
	marginBottom: 10,
}
const inputzim = {
	background: '#ddd',
	border: '#89f',
	padding: '15px 15px',
	maxWidth: 250,
	fontSize: 14,
	fontWeight: 500,
	borderRadius: 5,
	outline: 0,
	marginBottom: 5,
}
const inputzimButton = {
	background: '#89f',
	border: 0,
	borderRadius: 5,
	color: '#fff',
	cursor: 'pointer',
	padding: '15px 30px',
	boxShadow: '5px 5px 0 0 #dee3ff',
	outline: 0,
	fontWeight: 900,
	fontSize: 18,
}

const labelStyle = {
	color: '#89f',
	fontWeight: 'bold',
	fontSize: 14,
	verticalAlign: '5%',
}

const smallzim = {
	...labelStyle,
	// fontSize: 11,
	fontStyle: 'italic',
}
const GatsbyLoginForm = () => {
	const [pwd, setPwd] = useState('')
	const [email, setEmail] = useState('')
	const [honey, setHoney] = useState('')
	const [mcRes, setMcRes] = useState('')
	const [msg, setMsg] = useState('')
	const [success, setSuccess] = useState('')
	const handleMcRes = (msgReceived, resReceived) => {
		setMcRes(resReceived)
		handleMsg(msgReceived, resReceived)
		handleSuccess(resReceived)
	}
	const handleMsg = (msgNow, resReceived) => {
		let msgNull = null
		if (resReceived === 'error') {
			msgNull = 'E-mail inválido ou já cadastrado.'
		}
		if (resReceived === 'success') {
			msgNull = 'Lembrete definido. Até logo!'
		}
		setMsg(msgNull)
	}
	const handleSuccess = (successNow) => {
		setSuccess(successNow)
	}

	const handleEmailChange = (emailTyping) => {
		setEmail(emailTyping)
	}
	const handlePwdChange = (pwdTyping) => {
		setPwd(pwdTyping)
	}
	const handleHoneypotChange = (honeyTyping) => {
		setHoney(honeyTyping)
	}
	const handleSubmit = async (e, email, honey) => {
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

	new LoginAjaxRequest(config)

	// const credentials = {
	// 	username: '',
	// 	pwd: '',
	// }
	// function something(e) {
	// 	e.preventDefault()
	// 	const target = e.target
	// 	const value = target.value
	// 	const username = target.username
	// 	setState({
	// 		[username]: value,
	// 	})
	// }

	// function something(e) {
	// 	e.preventDefault()
	// 	const data = {
	// 		user: 'e.value',
	// 		pwd: 'e.value',
	// 		action: 'login_init',
	// 	}
	// 	const config = {
	// 		ajax_url: 'http://localhost:3000/wp-admin/admin-ajax.php',
	// 	}
	// 	const easyAjax = (e, n, z) => {
	// 		const t = window.origin,
	// 			o = new XMLHttpRequest()
	// 		return (
	// 			(o.responseType = 'json'),
	// 			o.open(z, t + e.ajax_url, !0),
	// 			o.setRequestHeader(
	// 				'Content-Type',
	// 				'application/x-www-form-urlencoded; charset=UTF-8'
	// 			),
	// 			o.send(
	// 				Object.keys(n)
	// 					.map((e) => e + '=' + n[e])
	// 					.join('&')
	// 			),
	// 			o
	// 		)
	// 	}
	// }

	// useEffect(() => {
	// 	easyAjax(config, data, 'POST')
	// })
	return (
		<>
			<h2>Acesse sua conta</h2>
			{msg ? (
				<p style={success === 'success' ? successHTMLstyle : errorHTMLstyle}>
					{msg}
				</p>
			) : null}
			{success !== 'success' ? (
				<form
					style={listItemStyles}
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					className="validate"
					target="_blank"
					onSubmit={(e) => handleSubmit(e, email, honey)}
					noValidate
					// id="login-form-ajax" method="post" onSubmit={(e) => something(e)}
				>
					<p className="hidden">
						<label>
							Don’t fill this out if you’re human:{' '}
							<input
								name="bot-field"
								onChange={(e) => handleHoneypotChange(e.target.value)}
								value={honey}
							/>
						</label>
					</p>
					<br />

					<input
						type="email"
						name="EMAIL"
						id="mce-EMAIL"
						placeholder="seu@email.com (avise-me por e-mail)"
						required
						style={inputzim}
						size="28"
						onChange={(e) => handleEmailChange(e.target.value)}
						value={email}
						// id="email-input"
						// type="text"
						// placeholder="Digite seu e-mail"
						// name="email"
						// autoComplete="on"
						// required
						// id="password-input"
						// type="password"
						// placeholder="Digite sua senha"
						// name="password"
						// autoComplete="on"
						// required
					/>
					<input
						id="password-input"
						required
						style={inputzim}
						size="28"
						onChange={(e) => handlePwdChange(e.target.value)}
						value={pwd}
						type="password"
						placeholder="Digite sua senha"
						name="password"
						autoComplete="off"
						required
					/>
					<br />
					<label htmlFor="mce-EMAIL">
						<span style={smallzim}>Não enviamos spam :)</span>
					</label>
					<br />
					<br />
					{honey || email === '' ? null : (
						<>
							<button
								type="submit"
								style={inputzimButton}
								name="subscribe"
								disabled={email ? false : true}
								id="wp-submit"
							>
								Acessar
							</button>
						</>
					)}
				</form>
			) : (
				<>
					<br />
				</>
			)}
			<button
				href="<?php echo esc_url( wp_lostpassword_url() ); ?>"
				alt="Esqueceu sua senha?"
			>
				Esqueceu sua senha?
			</button>
			<button className="login__access-registration border-bottom d-block fw-bolder fs-4 mb-4 pb-3">
				Não sou cliente
			</button>
			Problemas com seu acesso?{' '}
			<button
				className="fw-bolder text-decoration-underline"
				target="_blank"
				rel="noopener noreferrer"
				href=""
			>
				Fale conosco
			</button>
		</>
	)
}
export default GatsbyLoginForm
