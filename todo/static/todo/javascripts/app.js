angular.module('nodeTodo', [])
.controller('mainController', ($scope, $http) => {
    $scope.formData = {};
    $scope.todoData = {};

    // Get all todos
    $http.get('/todo/api/v1/todo/get/')
    .then((data) => {
        $scope.todoData = data;
        console.log(data);
    },
    (error) => {
        console.log('Error: ' + error);
    });

    // Create a new todo
    $scope.createTodo = () => {
        // console.log($scope.formData);
        $http.post('/todo/api/v1/todo/add/', $scope.formData)
        .then((data) => {
            $scope.formData = {};
            $scope.todoData = data;
            console.log(data);
        },
        (error) => {
            console.log('Error: ' + error);
        });
    };

    // Update todo
    $scope.updateTodo = (todo) => {
        // console.log(!todo.complete);
        $http.put('/todo/api/v1/todo/update/' + todo.id + '/', {"text": todo.text, "complete": !todo.complete})
        .then((data) => {
            $scope.todoData = data;
            console.log(data);
        },
        (error) => {
            console.log('Error: ' + error);
        });
    };

    // Delete a todo
    $scope.deleteTodo = (todoID) => {
        $http.delete('/todo/api/v1/todo/delete/' + todoID + '/')
        .then((data) => {
            $scope.todoData = data;
            console.log(data);
        },
        (error) => {
            console.log('Error: ' + error);
        });
    };
});
