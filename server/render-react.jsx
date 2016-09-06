import React from 'react';
import {renderToString} from 'react-dom/server';
import fs from 'fs';
import path from 'path';

const base = fs.readFileSync(path.resolve(__dirname, '../views/base.html'), 'utf8');

export default function(req, res, next) {
	res.renderReact = (Component, props = {}) => {
		res.send(
			base.replace('{{{body}}}', renderToString(<Component {...props} {...(res.locals || {})} />))
		);
	};

	next();
};
