var Backbone = require('backbone');
var TodoModel = require('./TodoModel');

var LocalStorage = require("backbone.localstorage");
class TodoCollection extends Backbone.Collection {
  constructor (options) {
    this.model = TodoModel;
    this.localStorage = new LocalStorage('todos');
    super(options);
  }

  getAll () {
    return this;
  }

  destroyCompleted () {
    this.getCompleted().every(todo => todo.destroy());
  }

  getCompleted () {
    return this.where({completed: true});
  }
  toggleAllCompleted () {
    this.where({completed: false}).map(todo => todo.toggleComplete());
  }
  get areAllCompleted () {
    return this.where({completed: true}).length === this.toJSON().length
  }

  nextId () {
  	return "c" + this.toJSON().length + 1;
  }
}

module.exports = TodoCollection;