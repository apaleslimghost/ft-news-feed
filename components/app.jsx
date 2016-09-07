import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../styles/test.scss';

const App = ({where}) => <h1>
	it works on the <span className={s.test}>{where}</span>!
</h1>;

export default withStyles(s)(App);
