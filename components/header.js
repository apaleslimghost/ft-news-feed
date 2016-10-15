import {define, html} from 'excise';
import s from '../styles/header.scss';

export default define('ft-header', () => html`<a href='/' class="${s.header}" data-link></a>`);
