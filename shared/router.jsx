import React from 'react';
import route from './route';

import Feed from '../components/feed.jsx';
import Article from '../components/article.jsx';
import api from './api';

export default route({
	async '/' () {
		const {articles} = await api.search(1);
		return <Feed articles={articles} page={1} />;
	},

	async '/page/:page' ({params}) {
		const result = await api.search(params.page);
		return <Feed {...result} />;
	},

	async '/content/:uuid' ({params}) {
		const article = await api.article(params.uuid);
		return <Article {...article} />;
	}
});
