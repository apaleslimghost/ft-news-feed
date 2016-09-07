import React, {Component, Children, PropTypes} from 'react';
import {renderToString} from 'react-dom/server';
import fs from 'fs';
import path from 'path';

const base = fs.readFileSync(path.resolve(__dirname, '../views/base.html'), 'utf8');

class Context extends Component {
	static childContextTypes = {
		insertCSS: PropTypes.func,
	};

	getChildContext() {
		return this.props.context;
	}

	render() {
		return Children.only(this.props.children);
	}
}

export default function(req, res, next) {
	res.renderReact = (Component, props = {}, context = {}) => {
		res.send(
			base.replace('{{{body}}}', renderToString(
				<Context context={context}>
					<Component {...props} {...(res.locals || {})} />
				</Context>
			))
		);
	};

	next();
};
