export default (routes, {clientPrefix = ''} = {}) => Object.keys(routes).reduce((o, key) => {
	o[key] = (...params) => fetch(`${clientPrefix}/${key}/${params.join('/')}`).then(r => r.json());
	return o;
}, {})
