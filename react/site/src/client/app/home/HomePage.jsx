import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

class Tile extends React.Component {

	constructor(props) {
		super(props);
		this.state = {mouseOn : false};

		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
	}

	onMouseEnter() {
		this.setState({mouseOn : true});
	}

	onMouseLeave() {
		this.setState({mouseOn : false});
	}

	render() {
		console.log(this.state);
		return (
			<div className={classNames("tile", {'tile-left': this.props.left, 'tile-right': this.props.right})}>
				<div className="tile-image-box">
					<img className="tile-image" src={this.props.imageUrl} />
				</div>
				<div 
					className={classNames("tile-cover", { "tile-cover-on" : this.state.mouseOn, "tile-cover-off" : !this.state.mouseOn })} 
					onMouseEnter={this.onMouseEnter} 
					onMouseLeave={this.onMouseLeave} />
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
					<div className={classNames("col-lg-6")}>
						<Tile left={true} right={false} imageUrl="/images/1.jpg" />
					</div>
					<div className={classNames("col-lg-6")}>
					<Tile right={true} left={false}  imageUrl="/images/2.jpg"/>
					</div>
				</div>
				<div className={classNames("row", "tile-row")}>
					<div className={classNames("col-lg-6")}>
						<Tile left={true} right={false}  imageUrl="/images/3.jpg"/>
					</div>
					<div className={classNames("col-lg-6")}>
						<Tile right={true} left={false}  imageUrl="/images/1.jpg"/>
					</div>
				</div>
			</div>
		</div>
	);
  }

}

export default HomePage;