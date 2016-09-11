import h from './h';
import s from '../styles/app.scss';

import header from './header';

export default ({children}) => h(s)`${header()}
	<main class=${s.main}>${children}</main>`;
