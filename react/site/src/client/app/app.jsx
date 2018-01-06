var React = require('react');
var ReactDOM = require('react-dom');
window.React = React;
import { BrowserRouter } from 'react-router-dom';

import Main from './Main.jsx';

ReactDOM.render((
	<BrowserRouter>
		<Main />
	</BrowserRouter>
), document.getElementById('react-box'));