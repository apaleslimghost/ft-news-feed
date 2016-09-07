import path from 'path';

export default {
	module: {
		loaders: [
			{test: /\.html$/, loader: 'raw'},
			{test: /\.jsx?$/, include: ['client', 'components', 'server', 'tools'].map(f => path.resolve(__dirname, '..', f)), loader: 'babel'},
		]
	}
};
