import route from './route';

import feed from '../components/feed';
import article from '../components/article';
import api from './api';
import {cacheArticle, getArticle} from './cache-article';

export default route({
	'/' () {
		return api.search(1)
			.then(({articles}) => articles.map(cacheArticle))
			.then(feed);
	},

	'/content/:uuid' ({params}) {
		return api.article(params.uuid)
			.then(cacheArticle)
			.catch(getArticle(params.uuid))
			.then(article);
	},

	'/_shell' () {
		return '';
	}
});
