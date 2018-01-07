import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

class Tile extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.state);
		return (
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
						<Tile left={true} right={false} imageUrl="/images/1.jpg" caption="About" />
					</div>
					<div className={classNames("col-sm-6")}>
					<Tile right={true} left={false}  imageUrl="/images/2.jpg" caption="Experience" />
					</div>
				</div>
				<div className={classNames("row", "tile-row")}>
					<div className={classNames("col-sm-6")}>
						<Tile left={true} right={false}  imageUrl="/images/3.jpg" caption="Projects" />
					</div>
					<div className={classNames("col-sm-6")}>
						<Tile right={true} left={false}  imageUrl="/images/1.jpg" caption="Contact" />
					</div>
				</div>
			</div>
		</div>
	);
  }

}

export default HomePage;