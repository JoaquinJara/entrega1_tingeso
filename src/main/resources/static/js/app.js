var app = angular.module('Proyecto Tingeso',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/students',{
            templateUrl: 'js/views/student.html',
            controller: 'studentController'
        })
        .when('/register',{
            templateUrl: 'js/views/register.html',
            controller: 'registerController'
        })
        .otherwise({
            redirectTo: '/index'
        });
});
