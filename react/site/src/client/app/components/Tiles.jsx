import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

import css from './tiles.scss'

class TileRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let colSize = 12 / this.props.children.length;
		
		let columns = []
		for (let i =0; i < this.props.children.length; i++) {
			columns.push(
				<div key={'tileRowChildKey' + i } className={classNames([`col-sm-${colSize}`])}>
					{this.props.children[i]}
				</div>
			);
		}

		return (
			<div className={classNames("row", css.tileRow)}>
				{columns}
			</div>
		);
	}
}

class TileTwoBaseLabel extends React.Component {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={css.tileTwoLabel}>
				<div>{this.props.caption}</div>
				<div>subcaption</div>
			</div>
		);
	}
}

class Tile extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let tileClasses = classNames(css.tile, {
			[css.tileTwo] : this.props.rowCount === 2,
			[css.tileThree] : this.props.rowCount === 3,
			[css.tileLeft] : this.props.left, 
			[css.tileRight] : this.props.right,
			[css.tileCenter] : this.props.center
		});

		return (
			<Link to={this.props.linkUrl}>
				<div className={tileClasses}>
					<div className={css.tileImageBox}>
						<img className={css.tileImage} src={this.props.imageUrl} />
					</div>
					<div className={css.tileCover}>
						<div className={classNames(css.tileCoverBackground)} />
						<div className={classNames("text-uppercase", css.tileCoverCaption)}>
							{this.props.caption}
						</div>
					</div>
				</div>
			</Link>
		);
	}

}

export { TileRow, Tile };
