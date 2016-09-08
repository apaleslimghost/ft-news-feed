import React from 'react';
import route from './route';

import Home from '../components/home.jsx';
import api from './api';

export default route({
	'/'() {
		return <Home where='anywhere' />;
	},

	async '/content/:uuid' ({params}) {
		const {bodyHTML} = await api.article(params.uuid);
		return <div dangerouslySetInnerHTML={{__html: bodyHTML}} />
	}
});
