/** @jsx React.DOM */
var React = require('react');
var ReactPropTypes = React.PropTypes;
var TodoActions = require('../actions/TodoActions');
const ENTER_KEY_CODE = 13;


class TodoTextInput {

	get propTypes () {
		return {
			className: ReactPropTypes.string,
			id: ReactPropTypes.string,
			placeholder: ReactPropTypes.string,
			onSave: ReactPropTypes.func.isRequired,
			value: ReactPropTypes.string
		}
	}

	getInitialState () {
		return {value: this.props.value || ''}
	}

	render () {
		return (
			<input
				className={this.props.className}
				id={this.props.id}
				placeholder={this.props.placeholder}
				onBlur={this._save}
				onChange={this._onChange}
				onKeyDown={this._onKeyDown}
				value={this.state.value}
				autoFocus={true} />			
		)
	}

	_save  () {
		this.props.onSave(this.state.value);
		this.setState({
			value: ''
		});
	}

	_onChange (e) {
		this.setState({value: e.target.value});
	}

	_onKeyDown (e) {
		if(e.keyCode === ENTER_KEY_CODE) {
			this._save();
		}
	}

}

module.exports = React.createClass(TodoTextInput.prototype);