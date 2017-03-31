function TodoController() {
  this.newTodo = '';

  this.list = [{
    title: 'First Item',
    completed: true
  },{
    title: 'Second Item',
    completed: false
  },{
    title: 'Third Item',
    completed: true
  },{
    title: 'Fourth Item',
    completed: true
  },{
    title: 'Last Items',
    completed: true
  }];

// Add new Item to list
  this.addTodo = function() {
    this.list.unshift({
      title: this.newTodo,
      completed: false
    });
    // clear box after adding item
    this.newTodo = '';
  };

// Delete Item from list
  this.removeTodo = function(item, index){
    this.list.splice(index, 1);
  };

// Gets Items not completed
  this.getRemaining = function() {
    return this.list.filter(function(item) {
      return !item.completed;
    });
  };

  window.onload = function() {
    console.log('Done loading');
  };

}

angular
  .module('app')
  .controller('TodoController', TodoController);
