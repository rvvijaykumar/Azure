var AppDispatcher = require('../dispatchers/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');


class TodoActions {
  /**
   * @param  {string} text
   */
  create (text) {
    AppDispatcher.trigger(TodoConstants.TODO_CREATE, {
      text: text
    });
  }


  /**
   * @param  {string} id
   * @param  {string} text
   */
  updateText (id, text) {
    AppDispatcher.trigger(TodoConstants.TODO_UPDATE_TEXT, {
      id: id,
      text: text
    });
  }

  /**
   * @param  {string} id
   */
  toggleComplete (id) {
    AppDispatcher.trigger(TodoConstants.TODO_COMPLETE, {
      id: id
    });
  }

  toggleAllCompleted () {
    AppDispatcher.trigger(TodoConstants.TODO_TOGGLE_COMPLETE_ALL, {});
  }

  destroyCompleted () {
    AppDispatcher.trigger(TodoConstants.TODO_DESTROY_COMPLETED, {});
  }

  /**
   * @param  {string} id
   */
  destroy (id) {
    AppDispatcher.trigger(TodoConstants.TODO_DESTROY, {
      id: id
    });
  }  
}

module.exports = new TodoActions();