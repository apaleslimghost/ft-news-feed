export default {
	createServer(handler) {
		function runHandler() {
			handler({url: location.pathname});
		}

		return {
			listen() {
				window.addEventListener('popstate', runHandler);
				runHandler();
			},

			navigate(url) {
				window.history.pushState(null, document.title, url);
				runHandler();
			},

			close() {
				window.removeEventListener('popstate', runHandler);
			}
		};
	},
};
