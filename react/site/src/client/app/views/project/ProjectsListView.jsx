import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

var SITE_URLS = require('../../constants/SiteUrls');
var IMAGE_URLS = require('../../constants/ImageUrls');
import { httpGet } from '../../util/SimpleHttpRequest.jsx';
import css from './projects_list_view.scss'
import { TileRow, Tile, TileDoubleLabel } from '../../components/Tiles.jsx';

class ProjectsListView extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		this.fetchProjects();
	}

	fetchProjects() {
		httpGet(SITE_URLS.PROJECT_API_FILTER_ALL, (data) => this.setState({projects:data}), (err) => this.setState({error:true}), this);
	}

	render() {
		if (this.state.projects === undefined) {
			return (<div />);
		}
		
		let projects = this.state.projects;
		let tiles = []
		for (let i = 0; i < projects.length; i++) {
			let project = projects[i]
			tiles.push(
				<Tile 
					linkUrl={SITE_URLS.SINGLE_PROJECT(project.uniqueUrlKey)}
					imageUrl={project.previewImageUrl} 
					center={true}
					tileSize={3}>
					<TileDoubleLabel 
						caption={project.name}
						subCaption={project.description} 
						tileSize={3} />
				</Tile>
			);
		}

		let remaining = tiles.length;
		let tileRows = []
		while (remaining > 0) {
			let num = remaining > 2 ? 3 : remaining;
			let subarr = tiles.slice(tiles.length - remaining, tiles.length - remaining + num);
			console.log()
			tileRows.push(
				<TileRow tileSize={3} >
					{subarr}
				</TileRow>
			);
			remaining = remaining - num;
		}

	    return (
	    	<div className={css.pageBox}>
			  	<div className="container">
			  		{tileRows}
			  	</div>
			</div>
		);
	}

}

export default ProjectsListView;