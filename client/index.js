import main from '../components/main';
import routes from '../shared/router';
import history from './history';

import './register-service-worker';

let server;

const mainElement = document.querySelector('main');

const createServer = routes => {
	if(server) server.close();

	server = history.createServer(
		(...args) => Promise.resolve(routes(...args))
		.then(({toString, styles}) => {
			mainElement.innerHTML = toString();
			styles.forEach(s => s._insertCss());
		})
	);

	document.body.addEventListener('click', ev => {
		if(ev.target.dataset.link === '') {
			ev.preventDefault();
			server.navigate(ev.target.pathname);
		}
	});

	server.listen();
};

createServer(routes);
