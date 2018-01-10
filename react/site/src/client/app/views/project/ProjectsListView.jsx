import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');
var SITE_URLS = require('../../constants/SiteUrls');
var IMAGE_URLS = require('../../constants/ImageUrls');
import { TileRow, Tile } from '../../components/Tiles.jsx';
import css from './projects_list_view.scss'

class ProjectsListView extends React.Component {

  render() {
  	console.log("ProjectsListView render");
    return (
    	<div className={css.pageBox}>
		  	<div className="container">
		  		<TileRow>
					<Tile 
						linkUrl={SITE_URLS.ABOUT}
						imageUrl={IMAGE_URLS.ABOUT_TILE_IMAGE} 
						caption="About" 
						center={true}
						rowCount={3} />
					<Tile 
						linkUrl={SITE_URLS.EXPERIENCE}
						imageUrl={IMAGE_URLS.EXPERIENCE_TILE_IMAGE} 
						caption="Experience" 
						center={true}
						rowCount={3} />
					<Tile 
						linkUrl={SITE_URLS.EXPERIENCE}
						imageUrl={IMAGE_URLS.EXPERIENCE_TILE_IMAGE} 
						caption="Experience" 
						center={true}
						rowCount={3} />
				</TileRow>
				<TileRow>
					<Tile 
						linkUrl={SITE_URLS.ABOUT}
						imageUrl={IMAGE_URLS.ABOUT_TILE_IMAGE} 
						caption="About" 
						center={true}
						rowCount={3} />
					<Tile 
						linkUrl={SITE_URLS.EXPERIENCE}
						imageUrl={IMAGE_URLS.EXPERIENCE_TILE_IMAGE} 
						caption="Experience" 
						center={true}
						rowCount={3} />
					<Tile 
						linkUrl={SITE_URLS.EXPERIENCE}
						imageUrl={IMAGE_URLS.EXPERIENCE_TILE_IMAGE} 
						caption="Experience" 
						center={true}
						rowCount={3} />
				</TileRow>
		  	</div>
		</div>
	);
  }

}

export default ProjectsListView;