import main from '../components/main';
import routes from '../shared/router';
import history from './history';

import './register-service-worker';

let server;

const createServer = routes => {
	if(server) server.close();

	server = history.createServer(
		(...args) => Promise.resolve(routes(...args))
		.then(({toString, styles}) => {
			document.querySelector('main').innerHTML = toString();
			styles.forEach(s => s._insertCss());
		})
	);

	server.listen();
};

createServer(routes);
