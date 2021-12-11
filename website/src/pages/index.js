import React from 'react'

export default function Home(props) {
	return (
		<>
			<div className="login__access-logo d-xl-none"></div>

			<h2 className="login__access-title fw-bolder mb-1 text-dark">
				Acesse sua conta
			</h2>

			<p className="login__access-description fs-4">
				Bem-vindo, coloque seu e-mail e senha
				<br />
				para acessar a plataforma.
			</p>

			<form
				id="login-form-ajax"
				className="login__access-form modal-content border-0"
				method="post"
			>
				<div className="form-group position-relative mb-4">
					<i className="login__access-form-icons position-absolute text-primary uil uil-at"></i>
					<input
						id="email-input"
						className="form-control border-0 border-bottom rounded-0"
						type="text"
						placeholder="Digite seu e-mail"
						name="email"
						autoComplete="on"
						required
					/>
				</div>
				<div className="form-group position-relative mb-4">
					<i className="login__access-form-icons position-absolute text-primary uil uil-lock"></i>
					<input
						id="password-input"
						className="form-control border-0 border-bottom rounded-0"
						type="password"
						placeholder="Digite sua senha"
						name="password"
						autoComplete="on"
						required
					/>
				</div>
				<div className="d-grid gap-2">
					<button id="wp-submit" className="btn btn-primary fs-4" type="submit">
						Acessar
					</button>
				</div>
			</form>
			<div id="message-error" className="alert alert-danger" role="alert">
				This is a danger alert—check it out!
			</div>
			<div id="message-success" className="alert alert-success" role="alert">
				This is a success alert—check it out!
			</div>

			<p className="login__access-alert border-bottom fw-bold fs-4 mb-3 pb-4">
				<button
					href="<?php echo esc_url( wp_lostpassword_url() ); ?>"
					alt="Esqueceu sua senha?"
				>
					Esqueceu sua senha?
				</button>
			</p>

			<button className="login__access-registration border-bottom d-block fw-bolder fs-4 mb-4 pb-3">
				Não sou cliente
			</button>

			<p className="login__access-talk fs-4 mx-auto">
				Problemas com seu acesso?{' '}
				<i className="uil uil-whatsapp text-primary"></i>
				<button
					className="fw-bolder text-decoration-underline"
					target="_blank"
					rel="noopener noreferrer"
					href=""
				>
					Fale conosco
				</button>
				.
			</p>
		</>
	)
}
