import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

var SITE_URLS = require('../../constants/SiteUrls');

import ProjectsListView from './ProjectsListView.jsx';
import ProjectsSingleView from './ProjectsSingleView.jsx';

class ProjectsMain extends React.Component {

	render() {
		return (
			<Switch>
				<Route exact path={SITE_URLS.PROJECTS} component={ProjectsListView}/>
				<Route path={SITE_URLS.SINGLE_PROJECT} component={ProjectsSingleView}/>
			</Switch>
		);
	}
}

export default ProjectsMain;
