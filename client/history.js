export default {
	createServer(handler) {
		function runHandler(url = location.pathname) {
			handler({url});
		}

		return {
			listen() {
				window.addEventListener('popstate', runHandler);
				runHandler();
			},

			navigate(url) {
				window.history.pushState(null, document.title, url);
				runHandler(url);
			},

			close() {
				window.removeEventListener('popstate', runHandler);
			}
		};
	},
};
