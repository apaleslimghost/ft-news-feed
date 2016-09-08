importScripts('/assets/sw-toolbox/sw-toolbox.js');

toolbox.precache([
	'/',
	'/app.js',
	// '/app.css',
	'http://image.webservices.ft.com/v1/images/raw/fticon:brand-ft-masthead?source=newsfeed'
]);

toolbox.router.get('/', toolbox.cacheFirst);
toolbox.router.get('/app.js', toolbox.cacheFirst);
toolbox.router.get('/content/:uuid', toolbox.cacheFirst);
toolbox.router.get('/_api/search/:page', toolbox.networkFirst);
toolbox.router.get('/_api/article/:uuid', toolbox.networkFirst);
toolbox.router.get(
	'/v1/images/raw/fticon:brand-ft-masthead',
	toolbox.cacheOnly,
	{origin: 'http://image.webservices.ft.com'}
);

console.log(toolbox.router.routes);
