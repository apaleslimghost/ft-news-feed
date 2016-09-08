export default (routes, {clientPrefix = ''} = {}) => Object.keys(routes).reduce((o, key) => {
	o[key] = async (...params) => {
		const response = await fetch(`${clientPrefix}/${key}/${params.join('/')}`);
		return response.json();
	};
	return o;
}, {})
