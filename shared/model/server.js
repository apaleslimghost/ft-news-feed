import route from '../route';
import getParamNames from 'get-parameter-names';

export default handlers => {
	handlers.router = route(Object.keys(handlers).reduce((routes, key) => {
		const handler = handlers[key];
		const path = `/${key}/${getParamNames(handler).map(p => `:${p}`).join('/')}`;
		routes[path] = ({params}) => handler(...Object.values(params));
		return routes;
	}, {}));

	return handlers;
}
