import React from 'react';
import route from './route';

import Home from '../components/home.jsx';

export default route({
	'/'() {
		return <Home where='anywhere' />;
	},

	'/test'() {
		return <Home where='this is a test lol' />;
	}
});
