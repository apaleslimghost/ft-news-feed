import React, {Component, PropTypes} from 'react';
import Main from './main.jsx';

class App extends Component {
	static childContextTypes = {
		insertCss: PropTypes.func,
		link: PropTypes.func,
	};

	static defaultProps = {
		insertCss() {},
		link() {},
	};

	getChildContext() {
		return {
			insertCss: this.props.insertCss,
			link: this.props.link,
		};
	}

	render() {
		return <Main>{this.props.children}</Main>;
	}
}

export default App;
