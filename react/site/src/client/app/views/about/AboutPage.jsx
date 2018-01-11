import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

var SITE_URLS = require('../../constants/SiteUrls');
var IMAGE_URLS = require('../../constants/ImageUrls');

import css from './about_page.scss'

class AboutPage extends React.Component {

	render() {
		return (
			<div className={css.pageBox}>
				<div className="container">
					<div className={classNames("row", "flex-row-reverse")}>
						<div className={classNames("col-sm-8")}>
							<p>Hi and welcome! Thanks for checking out my page. I built this site to provide some information about my skills and past experiences and to showcase a few of my projects.</p>
							<p>I’m a recent grad from the Master of Computer and Information Technology program (MCIT) at the University of Pennsylvania and current dev at 1stdibs.com, an ecommerce marketplace for 'The most beautiful things on Earth', where I work as a backend engineer. Before making my way into tech I worked in both the social services and world languages fields, teaching Spanish in a number of settings and spending two and a half years as an Employment Specialist at a vocational training service for individuals with developmental disabilities.</p>
							<p>Outside of my studies I enjoy backcountry camping, travel, home brewing, craft coffee and all things computer science. There are a couple of pictures from past trips on the slider above.</p>
							<p>Please feel free to get in touch (contact button above) with any questions about the MCIT program, Philly, CS, etc. or just to connect.</p>
						</div>
						<div className={classNames("col-sm-4", "text-center")}>
							<img className={classNames(css.profilePic)} src={IMAGE_URLS.PROFILE_PIC} alt="profile pic" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutPage;