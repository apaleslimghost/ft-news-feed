importScripts('/assets/sw-toolbox/sw-toolbox.js');

toolbox.precache([
	'/',
	'/app.js',
	// '/app.css',
	'http://image.webservices.ft.com/v1/images/raw/fticon:brand-ft-masthead?source=newsfeed'
]);

function cachedHomepage(request, values, options) {
	const homepage = request.clone();
	homepage.url = location.origin;
	return toolbox.cacheFirst(homepage, {}, options);
}

toolbox.router.get('/', toolbox.cacheFirst);
toolbox.router.get('/app.js', toolbox.cacheFirst);
toolbox.router.get('/page/:page', cachedHomepage);
toolbox.router.get('/content/:uuid', cachedHomepage);
toolbox.router.get('/_api/search/:page', toolbox.networkFirst);
toolbox.router.get('/_api/article/:uuid', toolbox.networkFirst);
toolbox.router.get(
	'/v1/images/raw/fticon:brand-ft-masthead',
	toolbox.cacheOnly,
	{origin: 'http://image.webservices.ft.com'}
);
