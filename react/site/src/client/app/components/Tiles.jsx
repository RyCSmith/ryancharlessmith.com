import React from 'react';
import { Link } from 'react-router-dom';
var classNames = require('classnames');

import css from './tiles.scss'

class TileRow extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let children = React.Children.toArray(this.props.children);
		let numChildren = children.length;
		let colSize = 12 / this.props.tileSize;

		let columns = []
		for (let i = 0; i < numChildren; i++) {
			columns.push(
				<div key={'tileRowChildKey' + i } className={classNames([`col-sm-${colSize}`])}>
					{children[i]}
				</div>
			);
		}
		
		let spacersNeeded = this.props.tileSize - numChildren;
		for (let i = numChildren; i < (numChildren + spacersNeeded); i++) {
			columns.push(
				<div key={'tileRowChildKey' + i } className={classNames([`col-sm-${colSize}`])} />
			);
		}

		return (
			<div className={classNames("row", css.tileRow)}>
				{columns}
			</div>
		);
	}
}

class TileSingleLabel extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let labelClass = classNames("text-uppercase", {
			[css.tileTwoSingleCaption] : this.props.tileSize === 2
			// [css.tileThreeSingleCaption] : this.props.tileSize === 3 // TODO: add support for size 3 via props
		});

		return (
			<div className={labelClass}>
				<div>{this.props.caption}</div>
			</div>
		);
	}
}

class TileDoubleLabel extends React.Component {

	constructor(props) {
		super(props);
	}
	
	render() {
		let labelClass = classNames({
			// [css.tileTwoDoubleCaption] : this.props.tileSize === 2, // TODO: add support for size 2 via props
			[css.tileThreeDoubleCaption] : this.props.tileSize === 3
		});

		return (
			<div className={labelClass}>
				<div className={classNames("text-uppercase", css.caption)}>
					{this.props.caption}
				</div>
				<div className={css.subCaption}>
					{this.props.subCaption}
				</div>
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
			[css.tileTwo] : this.props.tileSize === 2,
			[css.tileThree] : this.props.tileSize === 3,
			[css.tileLeft] : this.props.left, 
			[css.tileRight] : this.props.right,
			[css.tileCenter] : this.props.center
		});

		var tile = (
			<div className={tileClasses}>
				<div className={css.tileImageBox}>
					<img className={css.tileImage} src={this.props.imageUrl} />
				</div>
				<div className={css.tileCover}>
					<div className={classNames(css.tileCoverBackground)} />
					<div className={classNames(css.tileCoverCaption)}>
						{this.props.children}
					</div>
				</div>
			</div>
		);

		if (this.props.linkUrl) {
			return (
				<Link to={this.props.linkUrl}>
					{tile}
				</Link>
			)
		}
		return tile;
	}

}

export { TileRow, Tile, TileSingleLabel, TileDoubleLabel };
