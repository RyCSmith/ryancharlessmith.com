import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import HomePage from './home/HomePage.jsx';
import ProjectsMain from './project/ProjectsMain.jsx';
import AboutPage from './about/AboutPage.jsx';
import ContactPage from './contact/ContactPage.jsx';
import ExperiencePage from './experience/ExperiencePage.jsx';

var SITE_URLS = require('./constants/SiteUrls');

import Tester from './Tester.jsx';

class Main extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Switch>
					<Route exact path={SITE_URLS.HOME} component={HomePage}/>
					<Route exact path={SITE_URLS.ABOUT} component={AboutPage}/>
					<Route exact path={SITE_URLS.EXPERIENCE} component={ExperiencePage}/>
					<Route exact path={SITE_URLS.Contact} component={ContactPage}/>
					<Route path={SITE_URLS.PROJECTS} component={ProjectsMain}/>
					<Route exact path='/test/tester' component={Tester}/>
				</Switch>
			</div>
		);
	}
}

export default Main;
