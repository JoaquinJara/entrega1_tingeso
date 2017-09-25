var app = angular.module('pokemon',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/types',{
            templateUrl: 'js/views/pokemonType.html',
            controller: 'PokemonTypeController'
        })
        .when('/pokemon',{
            templateUrl: 'js/views/pokemon.html',
            controller: 'PokemonController'
        })
        .when('/movements',{
            templateUrl: 'js/views/pokemonMovement.html',
            controller: 'PokemonMovementController'
        })
        .otherwise({
            redirectTo: '/index'
        });
});