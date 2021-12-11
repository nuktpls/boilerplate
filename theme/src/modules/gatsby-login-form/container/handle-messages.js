const handleMessages = (resReceived, setMsg) => {
	let msgNull = null
	if (resReceived === 'error') {
		msgNull = 'E-mail inválido ou já cadastrado.'
	}
	if (resReceived === 'success') {
		msgNull = 'Lembrete definido. Até logo!'
	}
	return setMsg(msgNull)
}
export default handleMessages
