if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/service-worker.js').then(({scope}) => {
		console.log(`Service worker registered at ${scope}`);
	});
}
