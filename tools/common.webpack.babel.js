import path from 'path';
import NpmInstallPlugin from 'npm-install-webpack-plugin';

export default {
	plugins: [
		new NpmInstallPlugin(),
	],

	module: {
		loaders: [
			{test: /\.html$/, loader: 'raw'},
			{test: /\.jsx?$/, include: ['client', 'components', 'server', 'tools'].map(f => path.resolve(__dirname, '..', f)), loader: 'babel'},
		]
	}
};
