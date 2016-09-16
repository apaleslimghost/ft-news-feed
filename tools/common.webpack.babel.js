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
			}
		]
	},

	sassLoader: {
		includePaths: [path.resolve(__dirname, '../bower_components')],
	},

	devtool: 'sourcemap',
};
