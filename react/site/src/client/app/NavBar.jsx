import { Link } from 'react-router-dom';
var classNames = require('classnames');
var SITE_URLS = require('./constants/SiteUrls');

import css from './nav.scss'

let NavBar = (props) => {
	return (
		<div>
			<div className={css.navBar}>
			  	<div className={classNames("container", "text-uppercase", css.navBarContainer)}>
			  		<div className="row">
						<div className={classNames("col-lg-6", css.navNameBox)}>
							<Link to={SITE_URLS.HOME}>
								<div className={classNames("text-uppercase", css.navName)}>Ryan C Smith</div>
								<div className={css.navTitle}>Software Developer</div>
							</Link>
						</div>
						<div className="col-lg-6">
							<div className={classNames("row", css.linksRow)}>
								<div className={classNames("col", css.linkCol)}>
									<Link to={SITE_URLS.ABOUT}>About</Link>
								</div>
								<div className={classNames("col", css.linkCol)}>
									<Link to={SITE_URLS.EXPERIENCE}>Experience</Link>
								</div>
								<div className={classNames("col", css.linkCol)}>
									<Link to={SITE_URLS.PROJECTS}>Projects</Link>
								</div>
								<div className={classNames("col", css.linkCol)}>
									<Link to={SITE_URLS.CONTACT}>Contact</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={css.fixedNavBarSpacer} />
		</div>
	);
}
export default NavBar;