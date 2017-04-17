var Backbone = require('backbone');
class TodoModel extends Backbone.Model {
  defaults() {
    return {
      title: '',
      completed: false
    }
  }

  toggleComplete () {
  	this.save({
  		completed: !this.get('completed')
  	});
  }  
}

module.exports = TodoModel;