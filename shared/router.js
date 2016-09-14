import route from './route';

import feed from '../components/feed';
import article from '../components/article';
import api from './api';

export default route({
	async '/' () {
		const {articles} = await api.search(1);
		return feed({articles});
	},

	async '/content/:uuid' ({params}) {
		const content = await api.article(params.uuid);
		return article(content);
	},

	'/_shell' () {
		return '';
	}
});
