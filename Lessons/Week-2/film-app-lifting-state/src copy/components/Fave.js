import React, { Component } from 'react';


class Fave extends Component {

	// state = {
	// 	isFave: false
	// }

	handleClick(e) {
		// captures event and stops bubbling up
		e.stopPropagation()
		console.log('inside handle click')

		this.props.onFaveToggle();
		// this.setState(prevState => ({
		// 	isFave:!prevState.isFave
		// }))

	}

	render() {
		const isFaveClass = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
		return (
			<div 
				className={`film-row-fave ${isFaveClass}`}
			  onClick={(e) => this.handleClick(e)}
			>
			  <p className="material-icons">{isFaveClass}</p>
			</div>
		)
	}
}

export default Fave;