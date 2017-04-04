function todoApp () {
  return {
    restict: 'E',
    controller: 'TodoController as todo',
    templateUrl: '/js/todo.template.html'
  }
}

angular
  .module('app')
  .directive('todoApp', todoApp);
