import base from '../views/base';
import main from '../components/main';

export const html = (req, res) => children => {
	res.headers['content-type'] = 'text/html';
	const {content, styles = []} = main({children});
	return base({body: content(), styles: styles.reduce(
		(css, style) => {
			return css + style._getCss()
		},
		''
	)});
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
