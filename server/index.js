import connect from 'connect';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import errorhandler from 'errorhandler';
import http from 'http';

import webpackConfig from '../tools/client.webpack.babel';
import renderReact from './render-react.jsx';
import routes from '../shared/router.jsx';

const app = connect();
const port = process.env.PORT || 8082;

app.use(webpackMiddleware(webpack(webpackConfig), {
  publicPath: "/",
}));

app.use((req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(renderReact(routes(req, res)));
})

app.use(errorhandler());

http.createServer(app).listen(port, () => console.log(`⛭ listening on ${port}`))
