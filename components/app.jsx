import {Component, PropTypes, Children} from 'react';

export default class App extends Component {
	static childContextTypes = {
		insertCss: PropTypes.func,
		link: PropTypes.func,
	};

	static defaultProps = {
		insertCss() {},
		link() { },
	};

	getChildContext() {
		return {
			insertCss: this.props.insertCss,
			link: this.props.link,
		};
	}

	render() {
		return Children.only(this.props.children);
	}
}
