var app = angular.module('Proyecto Tingeso',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/alumnos',{
            templateUrl: 'js/views/alumnos.html',
            controller: 'alumnoController'
        })
        .when('/registrar',{
            templateUrl: 'js/views/registro.html',
            controller: 'registroController'
        })
        .otherwise({
            redirectTo: '/index'
        });
});
