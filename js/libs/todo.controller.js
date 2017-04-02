function TodoController(TodoService) {
  var ctrl = this;
  ctrl.newTodo = '';
  ctrl.list = [];

//  < -- API -- >
// Retrieves API's todo list
  function getTodos() {
    TodoService
      .retrieve()
      .then(function (response) {
        ctrl.list = response;
      });
  }

// Updates item, sends PUT request
  ctrl.updateTodo = function(item, index) {
    TodoService
      .update(item);
  }

//  < -- End API -- >


// Add new Item to list
  ctrl.addTodo = function() {
    ctrl.list.unshift({
      title: ctrl.newTodo,
      completed: false
    });
    // clear box after adding item
    ctrl.newTodo = '';
  };

// Delete Item from list
  ctrl.removeTodo = function(item, index){
    ctrl.list.splice(index, 1);
  };

// Gets Items not completed
  ctrl.getRemaining = function() {
    return ctrl.list.filter(function(item) {
      return !item.completed;
    });
  };

  getTodos();
}

angular
  .module('app')
  .controller('TodoController', TodoController);
