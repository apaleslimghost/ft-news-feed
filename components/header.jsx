import React, {PropTypes} from 'react';
import s from '../styles/header.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Header = (_, {link}) => <a href='/' onClick={link} className={s.header} />;

Header.contextTypes = {
	link: PropTypes.func,
};

export default withStyles(s)(Header);
