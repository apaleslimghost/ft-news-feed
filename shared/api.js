import apiClient from './api-client';
import model from '../shared/model';

export default model({
	article: uuid => apiClient.content({uuid}),

	search(p) {
		const page = parseInt(p, 10)
		const offset = 30 * (page - 1);

		return apiClient.search({
			filters: [],
			fields: ['title', 'id', 'metadata', 'summaries', 'publishedDate', 'byline'],
			count: 30,
			offset,
		}).then(articles => ({articles, page}));
	}
}, {clientPrefix: '/_api'});
