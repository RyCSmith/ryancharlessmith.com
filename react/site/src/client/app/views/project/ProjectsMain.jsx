import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

var SITE_URLS = require('../../constants/SiteUrls');

import ProjectsListView from './ProjectsListView.jsx';
import ProjectsSingleView from './ProjectsSingleView.jsx';

class ProjectsMain extends React.Component {

	render() {
		console.log("ProjectsMain render");
		return (
			<Switch>
				<Route exact path={SITE_URLS.PROJECTS} component={ProjectsListView}/>
				<Route path='/test/projects/:number' component={ProjectsSingleView}/>
			</Switch>
		);
	}
}

export default ProjectsMain;
