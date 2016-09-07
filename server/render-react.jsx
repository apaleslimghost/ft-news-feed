import React from 'react';
import CssInsertReceive from '../components/css-insert-receive.jsx';
import {renderToString} from 'react-dom/server';
import base from '../views/base';

export default function(req, res, next) {
	res.renderReact = (Component, props = {}, context = {}) => {
		let styles = '';
		const insertCss = s => styles += s._getCss();

		const body = renderToString(
			<CssInsertReceive insertCss={insertCss}>
				<Component {...props} {...(res.locals || {})} />
			</CssInsertReceive>
		);

		res.send(
			base({body, styles})
		);
	};

	next();
};
