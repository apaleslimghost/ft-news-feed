const path = require('path');

module.exports = {
	entry: {
		app: './client/index.jsx',
	},
	output: {
		path: '/',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.html$/, loader: 'raw'},
			{test: /\.jsx?$/, include: ['client', 'components'].map(f => path.resolve(__dirname, f)), loader: 'babel'},
		]
	}
};
