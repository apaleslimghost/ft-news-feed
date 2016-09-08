import React from 'react';
import route from './route';

import Home from '../components/home.jsx';
import Article from '../components/article.jsx';
import api from './api';

export default route({
	async '/' () {
		const articles = await api.search();
		return <Home articles={articles} />;
	},

	async '/content/:uuid' ({params}) {
		const article = await api.article(params.uuid);
		return <Article {...article} />;
	}
});
