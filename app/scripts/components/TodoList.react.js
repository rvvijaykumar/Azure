/** @jsx React.DOM */
var React = require('react');
var ReactPropTypes = React.PropTypes;

var TodoActions = require('../actions/TodoActions');
var TodoItem = require('./TodoItem.react');

class TodoList {
	get propTypes () {
		return {
			todos: ReactPropTypes.object.isRequired,
		}
	}

	render () {
		let todos = this.props.todos.toJSON().map((todo) => {
			return <TodoItem key={todo.id} todo={todo} />
		});
		return (
			<section id="main">
	        	<input id="toggle-all" type="checkbox" onChange={this._onToggleCompleteAll} checked={this.props.todos.areAllCompleted ? 'checked' : ''} />
	        	<label htmlFor="toggle-all">Mark all as completed</label>			
				<ul id="todo-list">
					{todos}
				</ul>
			</section>			
		)
	}

	_onToggleCompleteAll () {
		TodoActions.toggleAllCompleted();
	}
}

module.exports = React.createClass(TodoList.prototype);