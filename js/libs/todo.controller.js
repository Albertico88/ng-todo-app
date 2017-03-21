function TodoController() {
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
    title: 'Last Item',
    completed: false
  }];
}

angular
  .module('app')
  .controller('TodoController', TodoController);
