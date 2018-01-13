import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

var SITE_URLS = require('../constants/SiteUrls');
var IMAGE_URLS = require('../constants/ImageUrls');

import css from './fluent_image_tiles_box.scss'

class FluentImageTilesBox extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let squares  = [];
		for (let i = 0; i < this.props.imageUrls.length; i++) {
			squares.push(<div key={'fluentRowSB' + i } className={classNames(css.squareBox)}>
				<img className={classNames(css.squareBoxPic)} src={this.props.imageUrls[i]} />
			</div>);
		}

		return (
			<div className={classNames("row")}>
				<div className={classNames(css.limitBox)}>
					{squares}
				</div>
			</div>
		);
	}
}

export default FluentImageTilesBox;