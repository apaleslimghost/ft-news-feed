import React from 'react';
import {render} from 'react-dom';

import App from '../components/app.jsx';
import routes from '../shared/router.jsx';
import compose from 'lodash.compose';
import history from './history';

const server = history.createServer(compose(
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
