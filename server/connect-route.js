import renderReact from './render-react.jsx';

export const react = (req, res) => component => {
	res.headers['content-type'] = 'text/html';
	return renderReact(component);
};

export const json = (req, res) => obj => {
	res.headers['content-type'] = 'application/json';
	return JSON.stringify(obj);
};

export const id = (req, res) => a => a;

export default (routes, wrap = id) => (req, res, next) => {
	res.headers = {};
	return Promise.resolve(routes(req, res, next))
		.then(wrap(req, res, next))
		.then(t => {
			res.writeHead(res.statusCode, res.headers);
			res.end(t);
		})
		.catch(next);
}
