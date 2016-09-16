import connect from 'connect';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import errorhandler from 'errorhandler';
import http from 'http';
import path from 'path';
import serveStatic from 'serve-static';

import webpackConfig from '../tools/client.webpack.babel';
import connectRoute, {html, json} from './connect-route';
import routes from '../shared/router';
import api from '../shared/api';

const app = connect();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
	publicPath: "/",
}));

app.use(connectRoute(routes, html));
app.use('/_api', connectRoute(api.router, json));

app.use(serveStatic(path.resolve(__dirname, '../static')));
app.use('/assets', serveStatic(path.resolve(__dirname, '../bower_components/')));
app.use(errorhandler());

const port = process.env.PORT || 7000;

const server = http.createServer(app);
server.listen(port, () => {
	console.log(`⛭ listening on ${port}`);
});
