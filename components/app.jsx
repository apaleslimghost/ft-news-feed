import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../styles/test.scss';

const App = ({where}) => <h1 className={s.header}>
	it works on the <span className={s.highlight}>{where}</span>!
</h1>;

export default withStyles(s)(App);
