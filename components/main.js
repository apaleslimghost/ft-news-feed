import h from './h';
import s from '../styles/app.scss';

import header from './header';

export default ({children}) => h`${header()}
	<main class=${s.main}>${children}</main>`;
