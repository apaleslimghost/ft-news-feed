import React from 'react';
import {render} from 'react-dom';

import App from '../components/app.jsx';
import CssInsertReceive from '../components/css-insert-receive.jsx';

render(<CssInsertReceive insertCss={s => s._insertCss()}>
	<App where='client' />
</CssInsertReceive>, document.querySelector('main'));
