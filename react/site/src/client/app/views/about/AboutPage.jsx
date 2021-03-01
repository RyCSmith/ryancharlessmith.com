import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

var SITE_URLS = require('../../constants/SiteUrls');
var IMAGE_URLS = require('../../constants/ImageUrls');
var SITE_STRINGS = require('../../constants/SiteStrings');
import FluentImageTilesBox from '../../components/FluentImageTilesBox.jsx';
import ParagraphsText from '../../components/ParagraphsText.jsx';

import css from './about_page.scss'

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
							<ParagraphsText content={SITE_STRINGS.ABOUTPAGE_MAIN_TEXT} />
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