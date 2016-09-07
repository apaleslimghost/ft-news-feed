import React from 'react';
import App from '../components/app.jsx';
import {renderToString} from 'react-dom/server';
import base from '../views/base';

export default child => {
	let styles = '';
	const insertCss = s => styles += s._getCss();

	const body = renderToString(
		<App insertCss={insertCss}>
			{child}
		</App>
	);

	return base({body, styles});
};
