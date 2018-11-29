import React from 'react';
import ReactDOM from 'react-dom';

require('./index.scss');
import App from './containers/App';
import { addEqualsFunction } from './utils/api';

addEqualsFunction();

ReactDOM.render(
	<App />,
	document.getElementById('app')
)