import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import HomePage from './home/HomePage.jsx';
import ProjectsMain from './project/ProjectsMain.jsx';

class Main extends React.Component {

  render() {
    return (
		<div>
			<NavBar />
			<Switch>
		      <Route exact path='/test' component={HomePage}/>
		      <Route path='/test/projects' component={ProjectsMain}/>
		    </Switch>
	    </div>
	);
  }

}

export default Main;
