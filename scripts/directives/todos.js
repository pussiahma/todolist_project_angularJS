angular.module('todoApp')
.directive('todos', function() {
  return{
      templateUrl: 'templates/todosApp.html',
    controller: 'mainCtrl',
		replace: true
  }
});

