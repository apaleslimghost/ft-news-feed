import {route_} from 'boulevard';

export default route_({
	fourOhFour(req, res, next) {
		return Promise.reject();
	},

	addParams(params, args) {
		args[0].params = params;
		return args;
	}
});
