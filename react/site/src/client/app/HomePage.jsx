import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

  render() {
    return (
    		<div>
				<div>HomePage</div>
				<ul>
			        <li><Link to='/test/other'>Other</Link></li>
			      </ul>
			</div>
		);
  }

}

export default HomePage;