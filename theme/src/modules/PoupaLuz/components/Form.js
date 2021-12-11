import React from 'react'

export default function Form({
	msg,
	success,
	handleSubmit,
	honeypotStateChanger,
	emailStateChanger,
	email,
	honey,
	bot_msg,
	form_class,
	msgStyle,
	link_url,
	link_text,
	has_Link,
	email_placeholder,
	noSPAM,
	warnME
}) {
	return (
		<>
			{has_Link ? (
				<ul className="listStyles">
					<li className="docLinkStyle">
						<a
							className="linkStyle"
							target="_blank"
							rel="noreferrer"
							href={`${link_url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
						>
							{link_text}
						</a>
					</li>
				</ul>
			) : null}

			<div className={`mailchimp-integration-here ${form_class}`}>
				{msg ? <p className={msgStyle}>{msg}</p> : null}
				{success !== 'success' ? (
					<form
						className="listItemStyles validate"
						method="post"
						id="mc-embedded-subscribe-form"
						name="mc-embedded-subscribe-form"
						target="_blank"
						onSubmit={e => handleSubmit(e, email, honey)}
						noValidate
					>
						<p className="hidden">
							<label>
								{bot_msg}
								<input
									name="bot-field"
									onChange={e => honeypotStateChanger(e.target.value)}
									value={honey}
								/>
							</label>
						</p>
						<br />
						<input
							type="email"
							name="EMAIL"
							id="mce-EMAIL"
							placeholder={email_placeholder}
							required
							className="inputzim"
							size="28"
							onChange={e => emailStateChanger(e.target.value)}
							value={email}
						/>
						<br />
						<label htmlFor="mce-EMAIL">
							<span className="smallzim">{noSPAM}</span>
						</label>
						<br />
						<br />
						{honey || email === '' ? null : (
							<>
								<button
									type="submit"
									className="inputzimButton"
									name="subscribe"
									id="mc-embedded-subscribe"
									disabled={email ? false : true}
								>
									{warnME}
								</button>
							</>
						)}
					</form>
				) : (
					<>
						<br />
					</>
				)}
			</div>
		</>
	)
}
