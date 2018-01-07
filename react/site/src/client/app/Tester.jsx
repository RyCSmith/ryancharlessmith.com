import React from 'react';

class Tester extends React.Component {

  render() {
  	console.log("test");
    return (
    	<div className="image-container">
    		<div className="image-cover"></div>
    		<div className="label">RYAN SMITH</div>
			<img className="main-image" src="/images/vieques2.jpg" />
		</div>
	);
  }

}

export default Tester;
