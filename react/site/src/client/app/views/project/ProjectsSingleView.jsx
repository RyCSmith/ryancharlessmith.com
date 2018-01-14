import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

import css from './projects_single_view.scss'
var SITE_URLS = require('../../constants/SiteUrls');
import { httpGet } from '../../util/SimpleHttpRequest.jsx';

class ProjectsSingleView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {project : {}, error : false};
	}

	componentWillMount() {
		this.fetchProject();
	}

	fetchProject() {
		let fullUrl = SITE_URLS.PROJECT_API_READ(this.props.match.params.uniqueUrlKey);
		httpGet(fullUrl, (data) => this.setState({project:data}), (err) => this.setState({error:true}), this);
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