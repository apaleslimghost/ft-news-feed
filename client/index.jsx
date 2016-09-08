import React from 'react';
import {render} from 'react-dom';

import App from '../components/app.jsx';
import routes from '../shared/router.jsx';
import history from './history';

import './register-service-worker';

let server;

const createServer = routes => {
	if(server) server.close();

	server = history.createServer(
		(...args) => Promise.resolve(routes(...args))
		.then(child => render(<App
			insertCss={s => s._insertCss()}
			link={ev => {
				ev.preventDefault();
				server.navigate(ev.target.href);
			}}>
			{child}
		</App>, document.querySelector('main')))
	);

	server.listen();
};

createServer(routes);

if(module.hot) {
	module.hot.accept('../shared/router.jsx', () => {
		createServer(require('../shared/router.jsx').default);
	});
}
