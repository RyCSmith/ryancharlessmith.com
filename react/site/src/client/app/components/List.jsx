import React from 'react';

/*
	Given an array, just builds a list element.
	Ordered/Unordered based on props.
*/
class List extends React.Component {
	
	render() {

		let rows = []
		for (let i = 0; i < this.props.content.length; i++) {
			rows.push(
				<li key={"listContent_" + i}>{this.props.content[i]}</li>
			);
		}

		let comp = this.props.numbered ? <ol>{rows}</ol> : <ul>{rows}</ul>;
		return (
			comp
		);
	}
}
export default List;