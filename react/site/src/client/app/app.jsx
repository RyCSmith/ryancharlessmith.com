var React = require('react');
var ReactDOM = require('react-dom');
window.React = React;
import { BrowserRouter } from 'react-router-dom'
// var RecommendationWidget = require('./RecommendationWidget');
// var urls = require('./Shared/UrlConstants');

// ReactDOM.render((
// 		<h1>Hello, world!</h1>
//     ),
//     document.getElementById('react-box')
// );

import MainPage from './MainPage.jsx';

ReactDOM.render((
	<BrowserRouter>
		<MainPage />
	</BrowserRouter>
), document.getElementById('react-box'));