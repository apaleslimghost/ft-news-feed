import React from 'react';
import s from '../styles/header.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

const Header = () => <header className={s.header} />

export default withStyles(s)(Header);
