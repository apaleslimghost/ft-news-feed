import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../tools/client.webpack.babel';
import renderReact from './render-react.jsx';
import errorhandler from 'errorhandler';

import Home from '../components/home.jsx';

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig), {
  publicPath: "/",
}));

app.use(express.static('static'));
app.use(renderReact);

app.get('/', (req, res) => {
	res.renderReact(Home, {where: 'server'})
})

app.use(errorhandler());

app.listen(8082, () => console.log('listening'));
