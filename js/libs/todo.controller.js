function TodoController() {
  this.list = [{
    title: "First item",
    completed: false
  },{
    title: "Middle item",
    completed: false
  },{
    title: "Last item",
    completed: false
  }];
}

  angular
  .module('app')
  .controller('TodoController', TodoController);
