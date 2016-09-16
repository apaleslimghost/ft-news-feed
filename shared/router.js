import route from './route';

import feed from '../components/feed';
import article from '../components/article';
import api from './api';
import cacheArticle from './cache-article';
import idbKeyval from 'idb-keyval';

export default route({
	'/' () {
		return api.search(1)
			.then(({articles}) => articles.map(cacheArticle))
			.then(feed);
	},

	'/content/:uuid' ({params}) {
		return api.article(params.uuid)
			.then(cacheArticle)
			.catch(() => {
				return idbKeyval.get(params.uuid).then(article => {
					article.offline = true;
					return article;
				});
			})
			.then(article);
	},

	'/_shell' () {
		return '';
	}
});
