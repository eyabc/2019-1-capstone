const $fetch = (url, obj = {}) => {
	return new Promise((resolve, reject) => {
		fetch(url, obj)
		.then(res => res.json())
		.then(json => {
			if (json.success) resolve(json)
			else console.log(json.err)
		})
	})
}

export default $fetch