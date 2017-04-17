/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;
var TodoStore = require('../stores/TodoStore');
var TodoList = require('./TodoList.react');
var Header = require('./Header.react');
var Footer = require('./Footer.react');


function getTodoState() {
  return {
    allTodos: TodoStore.getAll()
  };
}


class TodoApp {

	getInitialState () {
		return getTodoState();
	}

	componentDidMount () {
		TodoStore.on('all', this._onChange);
	}

	componentWillUnmount () {
		TodoStore.off('all', this._onChange);
	}

	_onChange () {
		this.setState(getTodoState());
	}

	render () {
		return (
			<div>
				<Header />
				<TodoList todos={this.state.allTodos} />
				<Footer todos={this.state.allTodos} />
			</div>
		)
	}
}

module.exports = React.createClass(TodoApp.prototype);