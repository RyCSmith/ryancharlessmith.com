import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

var SITE_URLS = require('../../constants/SiteUrls');
var IMAGE_URLS = require('../../constants/ImageUrls');
import FluentImageTilesBox from '../../components/FluentImageTilesBox.jsx';
import ParagraphsText from '../../components/ParagraphsText.jsx';

import css from './about_page.scss'

const aboutText = "Hi and welcome! Thanks for checking out my page. I built this site to provide some information " + 
	"about my skills and past experiences and to showcase a few of my projects.\nI’m a 2016 grad from the Master of Computer " + 
	"and Information Technology program (MCIT) at the University of Pennsylvania and current dev at 1stdibs.com, an ecommerce " +
	"marketplace for 'The most beautiful things on Earth', where I work as a backend engineer. Before making my way into tech I " +
	"worked in both the social services and world languages fields, teaching Spanish in a number of settings and spending two and " +
	"a half years as an Employment Specialist at a vocational training service for individuals with developmental disabilities." +
	"\nOutside of work I enjoy backcountry camping, travel, home brewing, craft coffee and all things computer science." +
	"\nPlease feel free to get in touch (email and links on the contact page) with any questions about the MCIT program, Philly, " +
	"CS, etc. or just to connect.";

class AboutPage extends React.Component {

	render() {
		// no links on these images
		let imageUrlsArr = IMAGE_URLS.SKILL_PICS.map(x => [x, null]);



		return (
			<div className={css.pageBox}>
				<div className={classNames("container", css.aboutContainer)}>
					<div className={classNames("row", css.introRow)}>
						<div className={classNames("col-sm-12", css.overviewCol)}>
							<div className={classNames("text-center", css.picBox)}>
								<img className={classNames(css.profilePic)} src={IMAGE_URLS.PROFILE_PIC} alt="profile pic" />
							</div>
							<ParagraphsText content={aboutText} />
						</div>
					</div>
					<div className={classNames("row")}>
						<div className={classNames("col-sm-12", "text-uppercase", "text-center", css.skillsCaption)}>
							Areas of Proficiency
						</div>
					</div>
					<div className={classNames("row")}>
						<div className={classNames("col-sm-12", css.overviewCol)}>
							<FluentImageTilesBox imageUrls={imageUrlsArr} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutPage;