import common from './common.webpack.babel';
import merge from 'lodash.merge';

export default merge(common, {
	entry: {
		app: './client/index.jsx',
	},
	output: {
		path: '/',
		publicPath: '/',
		filename: '[name].js'
	},
});
