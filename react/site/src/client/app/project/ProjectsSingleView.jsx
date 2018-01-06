import React from 'react';
import { Link } from 'react-router-dom';

class ProjectsSingleView extends React.Component {

  render() {
    return (
		<div>
			<div>ProjectsSingleView</div>
			<li><Link to='/test/projects'>Back to Projects</Link></li>
	    </div>
	);
  }

}

export default ProjectsSingleView;