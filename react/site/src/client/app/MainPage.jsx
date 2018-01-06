// var React = require('react');
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
// var MainProjects = require('./MainProjects.jsx');
// var Other = require('./Other.jsx');
// var HomePage = require('./HomePage.jsx');

// // Main = () => (
// //   <main>
// //     <Switch>
// //       <Route exact path='/' component={Home}/>
// //       <Route path='/roster' component={Roster}/>
// //       <Route path='/schedule' component={Schedule}/>
// //     </Switch>
// //   </main>
// // )
// var MainPage = React.createClass({

// 	render: function() {
// 		return (
// 			<Switch>
// 		      <Route exact path='/test' component={MainProjects}/>
// 		      <Route exact path='/test/next' component={MainProjects}/>
// 		      <Route exact path='/test/other' component={Other}/>
// 		    </Switch>
// 		);
// 	}

// });

import React from 'react';
import HomePage from './HomePage.jsx';
import Other from './Other.jsx';

class MainPage extends React.Component {

  render() {
    return (
			<Switch>
		      <Route exact path='/test' component={HomePage}/>
		      <Route exact path='/test/other' component={Other}/>
		    </Switch>
		);
  }

}

export default MainPage;
