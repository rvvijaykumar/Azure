/** @jsx React.DOM */
var React = require('react');
var TodoActions = require('../actions/TodoActions');
var TodoTextInput = require('./TodoTextInput.react');

class Header {

	_onSave (text) {
		if(text.trim()) {
			TodoActions.create(text);
		}
	}
	render () {
		return (
			<header id="header">
			<h1>Todos</h1>
			<TodoTextInput
			  id="new-todo"
			  placeholder="What needs to be done?"
			  onSave={this._onSave} />
			</header>
		)
	}
}

module.exports = React.createClass(Header.prototype);