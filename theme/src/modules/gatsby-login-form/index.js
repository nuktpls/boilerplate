import React, { useEffect, setState, useState } from 'react'
import LoginAjaxRequest from '../login-ajax'
import config from '../config/login-form'
import handles from './container/handles'
const GatsbyLoginForm = () => {
	const msg = handles('msg')
	const success = handles('success')
	const email = handles('email')
	const honey = handles('honey')
	const handleSubmit = (e) => handles('handleSubmit', e, email, honey)
	const handlePwdChange = (e) => handles('handlePwdChange', e, e.target.value)

	const handleEmailChange = (e) =>
		handles('handleEmailChange', e, e.target.value)
	const handleHoneypotChange = (e) =>
		handles('handleHoneypotChange', e, e.target.value)
	const pwd = handles('pwd')
	return (
		<>
			<h2>Acesse sua conta</h2>
			{msg ? (
				<p
					style={success === 'success' ? 'successHTMLstyle' : 'errorHTMLstyle'}
				>
					{msg}
				</p>
			) : null}
			{success !== 'success' ? (
				<>
					<form
						method="post"
						id="mc-embedded-subscribe-form"
						name="mc-embedded-subscribe-form"
						className="validate"
						target="_blank"
						onSubmit={(e) => handleSubmit(e)}
						noValidate
						// id="login-form-ajax" method="post" onSubmit={(e) => something(e)}
					>
						<p className="hidden">
							<label>
								Don’t fill this out if you’re human:{' '}
								<input
									name="bot-field"
									onChange={(e) => handleHoneypotChange(e)}
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
							size="28"
							onChange={(e) => handleEmailChange(e)}
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
							size="28"
							onChange={(e) => handlePwdChange(e)}
							value={pwd}
							type="password"
							placeholder="Digite sua senha"
							name="password"
							autoComplete="off"
							required
						/>
						<br />
						<label htmlFor="mce-EMAIL">
							<small>Não enviamos spam :)</small>
						</label>
						<br />
						<br />
						{honey || email === '' ? null : (
							<>
								<button
									type="submit"
									name="subscribe"
									disabled={email ? false : true}
									id="wp-submit"
								>
									Acessar
								</button>
							</>
						)}
					</form>
					<button href="#wp_lostpassword_url" alt="Esqueceu sua senha?">
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
			) : (
				<>
					<br />
				</>
			)}
		</>
	)
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
	return <></>
}
export default GatsbyLoginForm
