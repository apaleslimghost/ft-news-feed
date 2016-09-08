import apiClient from './api-client';
import model from '../shared/model';
import fetch from './fetch';

export default model({
	async article(uuid) {
		const response = await fetch(`https://amp.ft.com/api/${uuid}`);
		const {_source} = await response.json();
		return _source;
	},

	async search(p) {
		const page = parseInt(p, 10)
		const offset = 30 * (page - 1);

		const articles = await apiClient.search({
			filters: [],
			fields: ['title', 'id', 'metadata', 'summaries', 'publishedDate', 'byline'],
			count: 30,
			offset,
		});

		return {articles, page};
	}
}, {clientPrefix: '/_api'});
