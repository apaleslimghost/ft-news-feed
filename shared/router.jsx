import React from 'react';
import router from 'boulevard';

import Home from '../components/home.jsx';

export default router({
	'/'() {
		return <Home where='anywhere' />;
	},

	'/test'() {
		return <Home where='this is a test lol' />;
	}
});
