import React from 'react';
import s from '../styles/app.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Header from './header.jsx';

const Main = ({children}) => <main className={s.main}>
	<Header />
	{children}
</main>;

export default withStyles(s)(Main);
