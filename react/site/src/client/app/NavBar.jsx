import { Link } from 'react-router-dom';

let NavBar = (props) => {
	return (
	  	<div>
			<h3>NavBar</h3>
			<ul>
				<li><Link to='/test'>Home</Link></li>
		        <li><Link to='/test/projects'>Projects</Link></li>
		    </ul>
		    <hr/>
		</div>
	);
}
export default NavBar;