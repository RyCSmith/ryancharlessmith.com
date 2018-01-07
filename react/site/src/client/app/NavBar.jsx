import { Link } from 'react-router-dom';
var classNames = require('classnames');

let NavBar = (props) => {
	console.log("NavBar render");
	return (
		<div className="nav-bar">
		  	<div className={classNames("container", "nav-bar-container", "text-uppercase")}>
		  		<div className="row">
					<div className={classNames("col-lg-6")}>
						<div className={classNames("row", "nav-name-box")}>
							<div className={classNames("col-lg-6")}>
								<div className={classNames("nav-name", "text-uppercase", "text-right")}>Ryan C Smith</div>
							</div>
							<div className={classNames("col-lg-6")}>
								<div className={classNames("nav-title")}>Software Developer</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className={classNames("row", "links-row", "text-right")}>
							<div className={classNames("col-sm-3", "link-col")}>
								<Link to='/test'>About</Link>
							</div>
							<div className={classNames("col-sm-3", "link-col")}>
								<Link to='/test/projects'>Experience</Link>
							</div>
							<div className={classNames("col-sm-3", "link-col")}>
								<Link to='/test/projects'>Projects</Link>
							</div>
							<div className={classNames("col-sm-3", "link-col")}>
								<Link to='/test/projects'>Contact</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default NavBar;