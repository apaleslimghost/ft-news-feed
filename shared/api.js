import apiClient from './api-client';
import model from '../shared/model';
import fetch from './fetch';

export default model({
	async article(uuid) {
		const response = await fetch(`https://amp.ft.com/api/${uuid}`);
		const {_source} = await response.json();
		return _source;
	},

	async search() {
		const response = await apiClient.search({
			filters: []
		});

		return response;
	}
}, {clientPrefix: '/_api'});
