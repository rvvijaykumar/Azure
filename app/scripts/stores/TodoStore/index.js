var AppDispatcher = require('../../dispatchers/AppDispatcher');
var TodoConstants = require('../../constants/TodoConstants');
var TodoCollection = require('./TodoCollection');

var _todos = new TodoCollection();
//fetch from server/localstorage
_todos.fetch();



AppDispatcher.on('all', function(eventName, payload) {

switch(eventName) {
    case TodoConstants.TODO_CREATE:
        var text = payload.text.trim();
        if (text !== '') {
            _todos.create({title: text});
        }
        break;

    case TodoConstants.TODO_DESTROY:
        var id = payload.id;
        _todos.get(id).destroy();
        break;
        
    case TodoConstants.TODO_UPDATE_TEXT:
        var text = payload.text.trim();
        var id = payload.id;
        if (text !== '') {
            _todos.get(id).save({title: text});
        }
        break;
        
    case TodoConstants.TODO_COMPLETE:
        var id = payload.id;
        _todos.get(id).toggleComplete();
        break;

    case TodoConstants.TODO_DESTROY_COMPLETED:
        _todos.destroyCompleted();
        break;

    case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
        _todos.toggleAllCompleted();
        break;
    default:
        return;
}

});

module.exports = _todos;