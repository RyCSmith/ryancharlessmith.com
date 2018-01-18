import React from 'react';
var classNames = require('classnames');

var SITE_URLS = require('../../constants/SiteUrls');
var IMAGE_URLS = require('../../constants/ImageUrls');
import css from './experience_page.scss'

class ExperiencePage extends React.Component {

	render() {
		let caption = "This page isn't quite filled out yet. For now, you can " + 
			"check out my primary work and education experience via my resume by clicking the preview image.";

		return (
			<div className={css.pageBox}>
				<div className={classNames("container", css.experienceContainer)}>
					<div className={classNames("row", "flex-row-reverse")}>
						<div className={classNames("col-lg-6", css.captionCol)}>
							{caption}
						</div>
						<div className={classNames("col-lg-6", "text-center")}>
							<a href={SITE_URLS.FILES_RESUME}>
								<img className={css.imageLimiter} src={IMAGE_URLS.EXPERIENCE_PAGE_IMAGE} />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ExperiencePage;