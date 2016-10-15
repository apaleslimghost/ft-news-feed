import {define, html} from 'excise';
import s from '../styles/shell.scss';
import './header';

export default define('ft-news-feed', ({children} = {}) => html`<ft-header />
	<main class="${s.main}"><slot /></main>`);
