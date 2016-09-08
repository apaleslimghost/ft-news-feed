import React from 'react';
import {render} from 'react-dom';

import App from '../components/app.jsx';
import routes from '../shared/router.jsx';
import compose from 'lodash.compose';
import history from './history';

import './register-service-worker';

let server;

const createServer = routes => {
	if(server) server.close();

	server = history.createServer(compose(
		child => render(<App
			insertCss={s => s._insertCss()}
			link={ev => {
				ev.preventDefault();
				server.navigate(ev.target.href);
			}}>
			{child}
		</App>, document.querySelector('main')),

		routes
	));

	server.listen();
};

createServer(routes);

if(module.hot) {
	module.hot.accept('../shared/router.jsx', () => {
		createServer(require('../shared/router.jsx').default);
	});
}
