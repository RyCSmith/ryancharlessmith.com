import React from 'react';
import { Link } from 'react-router-dom';

class ProjectsListView extends React.Component {

  render() {
  	console.log("ProjectsListView render");
    return (
    	<div>
			<div>ProjectsListView</div>
			<ul>
		        <li><Link to='/test/projects/1'>Project 1</Link></li>
		        <li><Link to='/test/projects/2'>Project 2</Link></li>
		        <li><Link to='/test/projects/3'>Project 3</Link></li>
		    </ul>
	    </div>
	);
  }

}

export default ProjectsListView;