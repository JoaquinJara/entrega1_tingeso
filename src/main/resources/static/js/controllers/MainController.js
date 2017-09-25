app.controller('MainController', ['$scope','$location', function($scope,$location) {

	$scope.title = "Proyecto Tingeso";

    $scope.alumnoPage = $location.path() === '/alumnos';
    $scope.registroPage = $location.path() === '/registrar';

	$scope.navigation = [
	{"text":"Lista de alumnos",   "link":"#!/alumnos", "condition":$scope.alumnoPage},
	{"text":"Ingresar alumno",   "link":"#!/registrar", "condition":$scope.registroPage},
	];

}]);