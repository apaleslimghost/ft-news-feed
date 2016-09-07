import path from 'path';
import common from './common.webpack.babel';

export default {
	...common,

	entry: {
		app: './client/index.jsx',
	},
	output: {
		path: '/',
		publicPath: '/',
		filename: '[name].js'
	},
};
