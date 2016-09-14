import route from './route';

import feed from '../components/feed';
import article from '../components/article';
import api from './api';

export default route({
	'/' () {
		return api.search(1).then(feed);
	},

	'/content/:uuid' ({params}) {
		return api.article(params.uuid).then(article);
	},

	'/_shell' () {
		return '';
	}
});
