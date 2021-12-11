// const data = {
// 	user: inputUser.value,
// 	pwd: inputPwd.value,
// 	action: config.action,
// };
// const config = {
// 	ajax_url: '/ajax.php'
// }
const easyAjax = (config, data) => {
	const baseUrl = window.origin
	const request = new XMLHttpRequest()
	request.responseType = 'json'
	request.open('POST', baseUrl + config.ajax_url, true)
	request.setRequestHeader(
		'Content-Type',
		'application/x-www-form-urlencoded; charset=UTF-8'
	)
	request.send(
		Object.keys(data)
			.map((key) => key + '=' + data[key])
			.join('&')
	)
	return request
}

export default easyAjax
