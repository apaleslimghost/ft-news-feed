import common from './common.webpack.babel';
import mergeConfig from './merge-config';

export default mergeConfig(common, {
	entry: {
		app: './client/index.jsx',
	},
	output: {
		path: '/',
		publicPath: '/',
		filename: '[name].js'
	},
});
