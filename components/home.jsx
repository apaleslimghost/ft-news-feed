import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../styles/test.scss';

const Home = ({where}, {link}) => <h1 className={s.header}>
	it works on the <span className={s.highlight}>{where}</span>!
	<ul>
		<li><a href='/' onClick={link}>home</a></li>
		<li><a href='/test' onClick={link}>test</a></li>
	</ul>
</h1>;

Home.contextTypes = {
	link: PropTypes.func,
};

export default withStyles(s)(Home);
