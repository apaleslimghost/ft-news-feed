import React from 'react';
import route from './route';

import Home from '../components/home.jsx';
import Article from '../components/article.jsx';
import api from './api';

export default route({
	'/'() {
		return <Home where='anywhere' />;
	},

	async '/content/:uuid' ({params}) {
		const article = await api.article(params.uuid);
		return <Article {...article} />;
	}
});
