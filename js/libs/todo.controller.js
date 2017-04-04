function TodoController(TodoService) {
  var ctrl = this;
  ctrl.newTodo = '';
  ctrl.list = [];

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
    if (!item.title) {
      ctrl.removeTodo(item, index);
      return;
    }
    TodoService
      .update(item);
  }

// Add new Item to list
  ctrl.addTodo = function() {
    // empty strings cant be added
    if (!ctrl.newTodo) {
      return;
    }
    TodoService
      .create({
        title: ctrl.newTodo,
        completed: false
      })
      .then(function (response) {
        ctrl.list.unshift(response);
        ctrl.newTodo = '';
      });
  };

// Delete Item from list
  ctrl.removeTodo = function(item, index){
    TodoService
      .remove(item)
      .then(function (response) {
        ctrl.list.splice(index, 1);
      });
  };

// Gets Items not completed
  ctrl.getRemaining = function() {
    return ctrl.list.filter(function(item) {
      return !item.completed;
    });
  };

  ctrl.toggleState = function(item) {
    TodoService
      .update(item)
      .then(function () {

      }, function () {
        item.completed = !item.completed;
      });
  };

  getTodos();
}

angular
  .module('app')
  .controller('TodoController', TodoController);
