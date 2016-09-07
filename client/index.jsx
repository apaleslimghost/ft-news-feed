import React from 'react';
import {render} from 'react-dom';

import Home from '../components/home.jsx';
import App from '../components/app.jsx';

render(<App insertCss={s => s._insertCss()}>
	<Home where='client' />
</App>, document.querySelector('main'));
