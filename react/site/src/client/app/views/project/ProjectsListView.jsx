import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

var SITE_URLS = require('../../constants/SiteUrls');
var IMAGE_URLS = require('../../constants/ImageUrls');

import css from './projects_list_view.scss'
import { TileRow, Tile, TileDoubleLabel } from '../../components/Tiles.jsx';

class ProjectsListView extends React.Component {

	// TODO: return to get this info via API call and create

	render() {
	    return (
	    	<div className={css.pageBox}>
			  	<div className="container">
			  		<TileRow tileSize={3} >
						<Tile 
							linkUrl={SITE_URLS.ABOUT}
							imageUrl={IMAGE_URLS.ABOUT_TILE_IMAGE} 
							center={true}
							tileSize={3}>
							<TileDoubleLabel 
								caption="Homfield.com" 
								subCaption={"Website to discover and book event spaces."} 
								tileSize={3} />
						</Tile>
						<Tile 
							linkUrl={SITE_URLS.EXPERIENCE}
							imageUrl={IMAGE_URLS.EXPERIENCE_TILE_IMAGE} 
							center={true}
							tileSize={3}>
							<TileDoubleLabel 
								caption="Bingle Search Engine" 
								subCaption={"Web Search Engine including web crawler, TF-IDF indexer, PageRank generator, and web interface."} 
								tileSize={3} />
						</Tile>
						<Tile 
							linkUrl={SITE_URLS.EXPERIENCE}
							imageUrl={IMAGE_URLS.EXPERIENCE_TILE_IMAGE} 
							center={true}
							tileSize={3}>
							<TileDoubleLabel 
								caption="Map Reduce System" 
								subCaption={"Distributed Program for processing map reduce jobs across a dynamic number of worker nodes."} 
								tileSize={3} />
						</Tile>
					</TileRow>
					<TileRow tileSize={3} >
						<Tile 
							linkUrl={SITE_URLS.ABOUT}
							imageUrl={IMAGE_URLS.ABOUT_TILE_IMAGE} 
							center={true}
							tileSize={3}>
							<TileDoubleLabel 
								caption="DataLake" 
								subCaption={"Data normalization, storage and search platform."} 
								tileSize={3} />
						</Tile>
						<Tile 
							linkUrl={SITE_URLS.EXPERIENCE}
							imageUrl={IMAGE_URLS.EXPERIENCE_TILE_IMAGE} 
							center={true}
							tileSize={3}>
							<TileDoubleLabel 
								caption="Bugs Language Interpreter" 
								subCaption={"Interpreter for Turing Complete Bugs Programming Language."} 
								tileSize={3} />
						</Tile>
						<Tile 
							linkUrl={SITE_URLS.EXPERIENCE}
							imageUrl={IMAGE_URLS.EXPERIENCE_TILE_IMAGE} 
							center={true}
							tileSize={3}>
							<TileDoubleLabel 
								caption="Maze Generator / Solver" 
								subCaption={"Website for to discover and book event spaces."} 
								tileSize={3} />
						</Tile>
					</TileRow>
			  	</div>
			</div>
		);
	}

}

export default ProjectsListView;