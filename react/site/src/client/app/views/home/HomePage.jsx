import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');
var SITE_URLS = require('../../constants/SiteUrls');
var IMAGE_URLS = require('../../constants/ImageUrls');

import { TileRow, Tile, TileSingleLabel } from '../../components/Tiles.jsx';
import css from './home_page.scss'

class HomePage extends React.Component {

  render() {
    return (
		<div className={css.pageBox}>
		  	<div className="container">
		  		<TileRow tileSize={2} >
					<Tile 
						linkUrl={SITE_URLS.ABOUT}
						imageUrl={IMAGE_URLS.ABOUT_TILE_IMAGE} 
						left={true} 
						tileSize={2}>
						<TileSingleLabel caption="About" tileSize={2} />
					</Tile>
					<Tile 
						linkUrl={SITE_URLS.EXPERIENCE}
						imageUrl={IMAGE_URLS.EXPERIENCE_TILE_IMAGE} 
						right={true}
						tileSize={2}>
						<TileSingleLabel caption="Experience" tileSize={2} />
					</Tile>
				</TileRow>
				<TileRow tileSize={2} >
					<Tile 
						linkUrl={SITE_URLS.PROJECTS}
						imageUrl={IMAGE_URLS.PROJECTS_TILE_IMAGE} 
						left={true}
						tileSize={2}>
						<TileSingleLabel caption="Projects" tileSize={2} />
					</Tile>
					<Tile 
						linkUrl={SITE_URLS.CONTACT}
						imageUrl={IMAGE_URLS.CONTACT_TILE_IMAGE} 
						right={true}
						tileSize={2}>
						<TileSingleLabel caption="Contact" tileSize={2} />
					</Tile>
				</TileRow>
			</div>
		</div>
	);
  }

}

export default HomePage;