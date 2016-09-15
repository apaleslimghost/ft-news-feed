import path from 'path';
import NpmInstallPlugin from 'npm-install-webpack-plugin';

export default {
	plugins: [
		new NpmInstallPlugin(),
	],

	output: {
		path: path.resolve(__dirname, '../build'),
	},

	module: {
		loaders: [
			{test: /\.html$/, loader: 'raw'},
			{
				test: /\.js$/,
				include: ['client', 'components', 'server', 'tools', 'views', 'shared'].map(
					f => path.resolve(__dirname, '..', f)
				),
				loader: 'babel'
			},
			{
				test: /\.scss$/,
				loaders: [
					'isomorphic-style-loader',
					'css-loader?sourceMap&modules&localIdentName=[name]_[local]_[hash:base64:3]',
					'sass-loader?sourceMap',
				],
			}
		]
	},

	sassLoader: {
		includePaths: [path.resolve(__dirname, '../bower_components')],
	},
};
