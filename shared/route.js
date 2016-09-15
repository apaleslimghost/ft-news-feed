import route from '@quarterto/avenue';

export default r => route(r, {
	fourOhFour(req, res, next) {
		return Promise.reject();
	},
});
