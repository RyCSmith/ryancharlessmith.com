import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

var SITE_URLS = require('../constants/SiteUrls');
var IMAGE_URLS = require('../constants/ImageUrls');

import css from './fluent_image_tiles_box.scss'

/*
	Bootstrap row which will create image squares that fill the screen evenly
	and roll down as the screen resizes.

	Takes [[image_url, link_url]] - will only wrap tile in link if link_url present.
*/
class FluentImageTilesBox extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		let squares  = [];
		for (let i = 0; i < this.props.imageUrls.length; i++) {
			let currentPair = this.props.imageUrls[i];
			let key = 'fluentRowSB' + currentPair[0];
			let imageTile = (
				<div key={key} className={classNames(css.squareBox)}>
					<img className={classNames(css.squareBoxPic)} src={currentPair[0]} />
				</div>
			);
			squares.push(
				currentPair[1] ? (<a key={'a_' + key} href={currentPair[1]}>{imageTile}</a>) : imageTile
			);
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