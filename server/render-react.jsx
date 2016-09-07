import React from 'react';
import App from '../components/app.jsx';
import {renderToString} from 'react-dom/server';
import base from '../views/base';

export default function(req, res, next) {
	res.renderReact = (Component, props = {}, context = {}) => {
		let styles = '';
		const insertCss = s => styles += s._getCss();

		const body = renderToString(
			<App insertCss={insertCss}>
				<Component {...props} {...(res.locals || {})} />
			</App>
		);

		res.send(
			base({body, styles})
		);
	};

	next();
};
