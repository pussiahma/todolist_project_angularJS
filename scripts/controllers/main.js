'use strict';

angular.module("todoApp")

.controller("mainCtrl", function($scope){

  $scope.required = true;

  $scope.headerText = "Things to do";
  $scope.saved = localStorage.getItem('todos');
$scope.todos = (localStorage.getItem('todos')!==null) ? JSON.parse($scope.saved) : [ {name: 'Learn AngularJS'}, {name: 'Build an Angular app'} ];
console.log($scope.todos);



 $scope.addTodo = function() {
  console.log("todo todo to-do-to");
   var todo = {name: $scope.todoText};
    $scope.todos.unshift(todo);
    todo.completed = false;
    console.log($scope.todos);
 $scope.todoText = '';
  console.log($scope.todos);
     localStorage.setItem('todos', JSON.stringify($scope.todos));
 };


$scope.saveTodo = function() {
  console.log("todo saved");
   var filteredTodos = $scope.todos.filter(function(todo){

      if(todo.edited) {
        return todo;
      };
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    });
  
}

 $scope.todoCompleted = function() {
  console.log("todo completed");
   var filteredTodos = $scope.todos.filter(function(todo){

      if(todo.completed) {
        return todo;

      };


        localStorage.setItem('todos', JSON.stringify($scope.todos));
    
    });


}


$scope.removeTodo = function(todo) {
  console.log("todo removed");

   $scope.todos.splice($scope.todos.indexOf(todo),1);
    localStorage.setItem('todos', JSON.stringify($scope.todos));

}


});


