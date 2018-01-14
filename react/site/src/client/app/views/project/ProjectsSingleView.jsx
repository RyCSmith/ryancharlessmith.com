import React from 'react';
import { Link } from 'react-router-dom';
const https = require('https');
var classNames = require('classnames');

import css from './projects_single_view.scss'
var SITE_URLS = require('../../constants/SiteUrls');

class ProjectsSingleView extends React.Component {
	
	constructor(props) {
		super(props);
		// add state like // this.state = {date: new Date()};
		this.state = {project:{}};
	}

	componentWillMount() {
		this.fetchProject();
	}

	fetchProject() {
		let fullUrl = SITE_URLS.PROJECT_API_READ(this.props.match.params.uniqueUrlKey);

		https.get(fullUrl, (resp) => {
			let data = '';

			resp.on('data', (chunk) => {
				data += chunk;
			});

			resp.on('end', () => {
				this.setState({project : JSON.parse(data)});
			});

		}).on("error", (err) => {
			console.log("Error: " + err.message); // TODO: error view
		});
	}

	render() {
		return (
			<div className={css.pageBox}>
			  	<div className="container">
			  		<div className={classNames("row")}>
			  			<div className={classNames("col-sm-6")}>
			  				{this.state.project.name}
			  			</div>
			  			<div className={classNames("col-sm-6")}>
							<img src={this.state.project.previewImageUrl} />

			  			</div>
			  		</div>
				</div>
			</div>
		);
	}

}

export default ProjectsSingleView;