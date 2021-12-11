import React from 'react'
import FormContainer from './form-container'
import FetchConsoleContainer from './fetchConsole-container'

export default function PoupaLuzContainer({nu_teias}) {
	switch (nu_teias.agent) {
		case 'subscribe':
			return <FormContainer nu_teias={nu_teias.options} />
		case 'fetch-console':
			return <FetchConsoleContainer nu_teias={nu_teias.options} />
		default:
			return null
	}
}
