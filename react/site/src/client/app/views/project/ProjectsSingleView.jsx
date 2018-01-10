import React from 'react';
import { Link } from 'react-router-dom';

class ProjectsSingleView extends React.Component {
	
	constructor(props) {
		super(props);
		// add state like // this.state = {date: new Date()};
	}

	render() {
		console.log("ProjectsSingleView render");
		return (
			<div>
				<div>ProjectsSingleView</div>
				<div>{this.props.match.params.number}</div>
				<li><Link to='/test/projects'>Back to Projects</Link></li>
			</div>
		);
	}

}

export default ProjectsSingleView;