import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import renderReact from './render-react.jsx';
import errorhandler from 'errorhandler';

import App from '../components/app.jsx';

const app = express();

app.use(webpackMiddleware(webpack(webpackConfig), {
  publicPath: "/",
}));

app.use(express.static('static'));
app.use(renderReact);

app.get('/', (req, res) => {
	console.log('hi');
	res.renderReact(App, {where: 'server'})
})

app.use(errorhandler());

app.listen(8082, () => console.log('listening'));
