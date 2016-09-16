import common from './common.webpack.babel';
import mergeConfig from './merge-config';
import cssLoader from './css-loader';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

export default mergeConfig(common, {
	entry: {
		app: './client/index',
	},

	output: {
		publicPath: '/',
		filename: '[name].js'
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css'),
	],

	resolve: {
		packageAlias: 'browser'
	},

	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract(cssLoader),
			}
		]
	},

	debug: true,
});
