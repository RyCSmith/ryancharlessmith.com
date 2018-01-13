import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

var SITE_URLS = require('../constants/SiteUrls');
var IMAGE_URLS = require('../constants/ImageUrls');

import css from './fluent_image_tiles_box.scss'

class FluentImageTilesBox extends React.Component {

	render() {

		let u  = [];
		for (let i = 0; i < 2; i++) {
			u.push(<div className={classNames(css.sixer)}>YO</div>);
		}
		return (
			<div className={classNames("row")}>
				<div className={classNames(css.sizerBox, css.sizerBoxCenter)}>
					{u}
				</div>
			</div>
		);
	}
}

export default FluentImageTilesBox;