import route from './route';

import '../components/feed';
import '../components/article';
import {html} from 'excise';

import api from './api';
import {cacheArticle, getArticle} from './cache-article';

export default route({
	'/' () {
		return api.search(1)
			.then(({articles}) => articles.map(cacheArticle))
			.then(articles => html`<ft-feed articles=${articles} />`);
	},

	'/content/:uuid' ({params}) {
		return api.article(params.uuid)
			.then(cacheArticle)
			.catch(getArticle(params.uuid))
			.then(article => html`<ft-article article=${article} />`);
	},

	'/_shell' () {
		return [];
	}
});
