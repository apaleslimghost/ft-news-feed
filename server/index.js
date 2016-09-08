import connect from 'connect';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import errorhandler from 'errorhandler';
import http from 'http';

import webpackConfig from '../tools/client.webpack.babel';
import renderReact from './render-react.jsx';
import routes from '../shared/router.jsx';

const app = connect();

const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/",
}));

app.use(webpackHotMiddleware(compiler));

app.use((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(renderReact(routes(req, res)));
})

app.use(errorhandler());

const port = process.env.PORT || 8082;

const server = http.createServer(app);
server.listen(port, () => {
	console.log(`⛭ listening on ${port}`);
});
