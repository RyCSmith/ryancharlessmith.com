import React from 'react';

/*
	Given a string, breaks on newlines and wraps each in <p></p>.
	Returns as single <div>.
*/
class ParagraphsText extends React.Component {
	render() {
		
		let paragraphs = []
		let split = this.props.content.split("\n");
		for (let i = 0; i < this.props.content.length; i++) {
			paragraphs.push(
				<p key={"paragraph_" + i}>{split[i]}</p>
			);
		}

		return (
			<div>{paragraphs}</div>
		);
	}
}

export default ParagraphsText;