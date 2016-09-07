import {Component, PropTypes, Children} from 'react';

export default class App extends Component {
	static childContextTypes = {
		insertCss: PropTypes.func,
	};

	static defaultProps = {
		insertCss() {},
	};

	getChildContext() {
		return {insertCss: this.props.insertCss};
	}

	render() {
		return Children.only(this.props.children);
	}
}
