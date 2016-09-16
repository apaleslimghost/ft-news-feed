import h from './h';
import s from '../styles/shell.scss';

import header from './header';

export default ({children} = {}) => h`${header()}
	<main class="${s.main}">${children}</main>`;
