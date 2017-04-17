/** @jsx React.DOM */
var React = require('react');
var cx = require('react/lib/cx');
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react');
const ENTER_KEY_CODE = 13;



class TodoItem {

	getInitialState () {
		return {isEditing: false}
	}

	render () {
		let todo = this.props.todo;
		let input;
		if(this.state.isEditing) {
			input = <TodoTextInput className="edit" onSave={this._onSave} value={todo.title} />
		}
		return (
		      <li
		        className={cx({
		          'completed': todo.completed,
		          'editing': this.state.isEditing
		        })}
		        key={todo.id}>
		        <div className="view">
		          <input className="toggle" type="checkbox" checked={todo.completed} onChange={this._onToggleComplete} />
		          <label onDoubleClick={this._onDoubleClick}>
		            {todo.title}
		          </label>
		          <button className="destroy" onClick={this._onDestroyClick} />
		        </div>
		        {input}
		      </li>
		)
	}

	_onSave (text) {
		TodoActions.updateText(this.props.todo.id, text);
		this.setState({isEditing: false});
	}
	_onToggleComplete () {
		TodoActions.toggleComplete(this.props.todo.id);
	}

	_onDestroyClick () {
		TodoActions.destroy(this.props.todo.id);
	}

	_onDoubleClick () {
		this.setState({isEditing: true});
	}	
}

module.exports = React.createClass(TodoItem.prototype);