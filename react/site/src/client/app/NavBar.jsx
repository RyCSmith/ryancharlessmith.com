import { Link } from 'react-router-dom';
var classNames = require('classnames');
var SITE_URLS = require('./constants/SiteUrls');

let NavBar = (props) => {
	return (
		<div>
			<div className="nav-bar">
			  	<div className={classNames("container", "nav-bar-container", "text-uppercase")}>
			  		<div className="row">
						<div className={classNames("col-lg-6", "nav-name-box")}>
							<Link to={SITE_URLS.HOME}>
								<div className={classNames("nav-name", "text-uppercase")}>Ryan C Smith</div>
								<div className={classNames("nav-title")}>Software Developer</div>
							</Link>
						</div>
						<div className="col-lg-6">
							<div className={classNames("row", "links-row")}>
								<div className={classNames("col", "link-col")}>
									<Link to={SITE_URLS.ABOUT}>About</Link>
								</div>
								<div className={classNames("col", "link-col")}>
									<Link to={SITE_URLS.EXPERIENCE}>Experience</Link>
								</div>
								<div className={classNames("col", "link-col")}>
									<Link to={SITE_URLS.PROJECTS}>Projects</Link>
								</div>
								<div className={classNames("col", "link-col")}>
									<Link to={SITE_URLS.CONTACT}>Contact</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="fixed-nav-bar-spacer" />
		</div>
	);
}
export default NavBar;