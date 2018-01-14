import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

import css from './projects_single_view.scss'
var SITE_URLS = require('../../constants/SiteUrls');
import { httpGet } from '../../util/SimpleHttpRequest.jsx';
import { randomHexKey } from '../../util/BasicUtils.jsx';

class ResumeRow extends React.Component {
	render() {
		return (
			<div className={classNames("row")}>
				<div className={classNames("col-md-2")}>
					{this.props.label}
				</div>
				<div className={classNames("col-md-10")}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

class List extends React.Component {
	
	render() {

		let rows = []
		for (let i = 0; i < this.props.content.length; i++) {
			rows.push(
				<li key={randomHexKey("listContent_" + i)}>{this.props.content[i]}</li>
			);
		}

		let comp = this.props.numbered ? <ol>{rows}</ol> : <ul>{rows}</ul>;
		return (
			comp
		);
	}
}

class ParagraphsText extends React.Component {
	render() {
		
		let paragraphs = []
		let split = this.props.content.split("\n");
		for (let i = 0; i < this.props.content.length; i++) {
			paragraphs.push(
				<p key={randomHexKey("paragraph_" + i)}>{split[i]}</p>
			);
		}

		return (
			<div>{paragraphs}</div>
		);
	}
}

class ProjectsSingleView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {error : false};
	}

	componentWillMount() {
		this.fetchProject();
	}

	fetchProject() {
		let fullUrl = SITE_URLS.PROJECT_API_READ(this.props.match.params.uniqueUrlKey);
		httpGet(fullUrl, (data) => this.setState({project:data}), (err) => this.setState({error:true}), this);
	}

	render() {
		let keyPrefix = "proj";
		let innerContent = [];
		let project = this.state.project;

		if (project) {
			innerContent.push(
		  		<div key={randomHexKey(keyPrefix)} className={classNames("row")}>
		  			<div className={classNames("col-sm-12", "text-center", "text-uppercase")}>
		  				{project.name}
		  				<hr/>
		  			</div>
		  		</div>
		  	);

		  	if (project.description) {
		  		innerContent.push(
			  		<ResumeRow key={randomHexKey(keyPrefix)} label="Purpose">
			  			<ParagraphsText content={project.description} />
			  		</ResumeRow>
			  	);
		  	}
		  	if (project.overview) {
		  		innerContent.push(
			  		<ResumeRow key={randomHexKey(keyPrefix)} label="Overview">
			  			<ParagraphsText content={project.overview} />
			  		</ResumeRow>
			  	);
		  	}

			if (project.implementationDetails) {
		  		innerContent.push(
			  		<ResumeRow key={randomHexKey(keyPrefix)} label="Implementation Details">
			  			<ParagraphsText content={project.implementationDetails} />
			  		</ResumeRow>
			  	);
		  	}

			if (project.technologyInfo) {
		  		innerContent.push(
			  		<ResumeRow key={randomHexKey(keyPrefix)} label="Technology Info">
			  			<List content={project.technologyInfo} numbered={false} />
			  		</ResumeRow>
			  	);
		  	}
			
			if (project.runningInstructions) {
		  		innerContent.push(
			  		<ResumeRow key={randomHexKey(keyPrefix)} label="Running Instructions">
			  			<List content={project.runningInstructions.instructions} 
			  				numbered={project.runningInstructions.numbered} />
			  		</ResumeRow>
			  	);
		  	}
			
			if (project.repoUrl) {
		  		innerContent.push(
			  		<ResumeRow key={randomHexKey(keyPrefix)} label="GitHub">
			  			<ParagraphsText content={project.repoUrl} />
			  		</ResumeRow>
			  	);
		  	}

		  	if (project.videoUrls) {
		  		innerContent.push(
			  		<ResumeRow key={randomHexKey(keyPrefix)} label="Videos">
			  			<List content={project.videoUrls} numbered={false} />
			  		</ResumeRow>
			  	);
		  	}
		}

		return (
			<div className={css.pageBox}>
			  	<div className="container">
		  			{innerContent}
				</div>
			</div>
		);
	}

}

export default ProjectsSingleView;