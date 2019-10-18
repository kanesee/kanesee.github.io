app.controller('mainCtrl',
  ['$scope'
  ,'$http'
  ,controllerFn
  ]);

function controllerFn($scope
                     , $http
                      ) {

  $scope.todos = [
    'groceries',
    'pay bills',
    'call mom'
  ];
  
  this.init = function() {

  }

  $scope.add = function(todo) {
    $scope.todos.push(todo);
    $scope.todo = null;
  }

  $scope.remove = function(idx) {
    $scope.todos.splice(idx, 1);
  }

  
  this.init();
}