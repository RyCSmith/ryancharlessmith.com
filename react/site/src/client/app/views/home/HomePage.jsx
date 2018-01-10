import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');
var SITE_URLS = require('../../constants/SiteUrls');
var IMAGE_URLS = require('../../constants/ImageUrls');

import { TileRow, Tile } from '../../components/Tiles.jsx';
import css from './home.scss'

class HomePage extends React.Component {

  render() {
    return (
		<div className={css.homeBox}>
		  	<div className="container">
		  		<TileRow>
					<Tile 
						linkUrl={SITE_URLS.ABOUT}
						imageUrl={IMAGE_URLS.ABOUT_TILE_IMAGE} 
						caption="About" 
						left={true} 
						rowCount={2} />
					<Tile 
						linkUrl={SITE_URLS.EXPERIENCE}
						imageUrl={IMAGE_URLS.EXPERIENCE_TILE_IMAGE} 
						caption="Experience" 
						right={true}
						rowCount={2} />
				</TileRow>
				<TileRow>
					<Tile 
						linkUrl={SITE_URLS.PROJECTS}
						imageUrl={IMAGE_URLS.PROJECTS_TILE_IMAGE} 
						caption="Projects" 
						left={true}
						rowCount={2} />
					<Tile 
						linkUrl={SITE_URLS.CONTACT}
						imageUrl={IMAGE_URLS.CONTACT_TILE_IMAGE} 
						caption="Contact" 
						right={true}
						rowCount={2} />
				</TileRow>
			</div>
		</div>
	);
  }

}

export default HomePage;