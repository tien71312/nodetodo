var app = angular.module("app.todos", ["xeditable"]);
app.controller("todoController", ['$scope','svTodos',function($scope,svTodos){
    $scope.appName = "Todo dashboard";
    $scope.formData ={};
    $scope.loading=true;
    $scope.todos =[];
    // load data from api
   
    svTodos.get().then(function(res){ 
        $scope.todos = res.data;
        $scope.loading = false; 
    });


    $scope.createTodo = function(){
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        }
        svTodos.create(todo).then(function(res){
            $scope.todos = res.data;
            $scope.formData.text ="";
            $scope.loading=false;
        });
    }
    $scope.updateTodo = function(todo){
        console.log("update todo: ", todo);
        $scope.loading=true;
        svTodos.update(todo).then(function(res){
            $scope.todos=res.data;
            $scope.loading = false;
        })
    }
    $scope.deleteTodo = function(todo){
        $scope.loading =true;
        console.log("delete todo: ", todo);
        svTodos.delete(todo._id).then(function(res){
            $scope.todos=res.data;
            $scope.loading = false;
        })
    }


}]);