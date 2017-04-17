/** @jsx React.DOM */
var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoActions');

class Footer {
	get propTypes () {
		return {
			todos: ReactPropTypes.object.isRequired
		}
	}

	render () {
		let completed = this.props.todos.where({completed: true}).length;
		let itemsLeft = this.props.todos.length - completed;
		let itemsLeftPhrase = itemsLeft === 1 ? ' item' : ' items';
		itemsLeftPhrase += ' left';
		let clearCompletedButton;
		if(completed) {
			clearCompletedButton = (
				<button id="clear-completed" onClick={this._onClearCompletedClick}>
					Clear completed ({completed})
				</button>
			)
		}
		return (
			<footer id="footer">
				<span id="todo-count">
					<strong>
						{itemsLeft}
					</strong>
					{itemsLeftPhrase}
				</span>
				{clearCompletedButton}
			</footer>
		)
	}

	_onClearCompletedClick () {
		TodoActions.destroyCompleted();
	}
}

module.exports = React.createClass(Footer.prototype);