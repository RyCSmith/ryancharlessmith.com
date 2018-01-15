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
			<div className={classNames("row", css.resumeRow)}>
				<div className={classNames("col-md-2", "text-uppercase", css.resumeRowHeader)}>
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

class ResumeVideoEmbed extends React.Component {
	
	wrapIframe(srcUrl) {
		return (
			<div className={css.videoLimiter}>
				<iframe 
					width="100%" 
					height="100%" 
					src={srcUrl}
					frameBorder="0" 
					allow="encrypted-media" 
					allowFullScreen />
			</div>
		);
	}

	render() {
		let rows = []
		let remaining = this.props.urls.length;
		while (remaining > 1) {
			rows.push(
				<div key={randomHexKey("video")} className="row">
					<div className="col-lg-6">
						{this.wrapIframe(this.props.urls[this.props.urls.length - remaining])}
					</div>
					<div className="col-lg-6">
						{this.wrapIframe(this.props.urls[this.props.urls.length - remaining + 1])}
					</div>
				</div>
			);
			remaining = remaining - 2;
		}

		if (remaining) {
			rows.push(
				<div key={randomHexKey("video")} className="row">
					<div className="col-lg-6">
						{this.wrapIframe(this.props.urls[this.props.urls.length - 1])}
					</div>
					<div className="col-lg-6" />
				</div>
			);
		}

		return (
			<div>{rows}</div>
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
		  			<div className={classNames("col-sm-12", "text-center", "text-uppercase", css.name)}>
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
			  			<ResumeVideoEmbed urls={project.videoUrls} />
			  		</ResumeRow>
			  	);
		  	}
		}

		return (
			<div className={css.pageBox}>
			  	<div className={classNames("container", css.projectContainer)}>
		  			{innerContent}
				</div>
			</div>
		);
	}

}

export default ProjectsSingleView;