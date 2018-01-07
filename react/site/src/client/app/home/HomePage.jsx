import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');
var SITE_URLS = require('../constants/SiteUrls');
var IMAGE_URLS = require('../constants/ImageUrls');

class Tile extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link to={this.props.linkUrl}>
				<div className={classNames("tile", {'tile-left': this.props.left, 'tile-right': this.props.right})}>
					<div className="tile-image-box">
						<img className="tile-image" src={this.props.imageUrl} />
					</div>
					<div className="tile-cover">
						<div className={classNames("tile-cover-background")} />
						<div className={classNames("tile-cover-caption", "text-uppercase")}>
							{this.props.caption}
						</div>
					</div>
				</div>
			</Link>
		);
	}

}

class HomePage extends React.Component {

  render() {
    return (
		<div className={classNames("home-box")}>
		  	<div className={classNames("container")}>
		  		<div className={classNames("row", "tile-row")}>
					<div className={classNames("col-sm-6")}>
						<Tile 
							linkUrl={SITE_URLS.ABOUT}
							imageUrl={IMAGE_URLS.ABOUT_TILE_IMAGE} 
							caption="About" 
							right={false} 
							left={true}  />
					</div>
					<div className={classNames("col-sm-6")}>
						<Tile 
							linkUrl={SITE_URLS.EXPERIENCE}
							imageUrl={IMAGE_URLS.EXPERIENCE_TILE_IMAGE} 
							caption="Experience" 
							right={true} 
							left={false}  />
					</div>
				</div>
				<div className={classNames("row", "tile-row")}>
					<div className={classNames("col-sm-6")}>
						<Tile 
							linkUrl={SITE_URLS.PROJECTS}
							imageUrl={IMAGE_URLS.PROJECTS_TILE_IMAGE} 
							caption="Projects" 
							right={false} 
							left={true}  />
					</div>
					<div className={classNames("col-sm-6")}>
						<Tile 
							linkUrl={SITE_URLS.CONTACT}
							imageUrl={IMAGE_URLS.CONTACT_TILE_IMAGE} 
							caption="Contact" 
							right={true} 
							left={false}  />
					</div>
				</div>
			</div>
		</div>
	);
  }

}

export default HomePage;