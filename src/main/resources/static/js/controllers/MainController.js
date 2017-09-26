app.controller('MainController', ['$scope','$location', function($scope,$location) {

	$scope.title = "Proyecto Tingeso";

    $scope.studentPage = $location.path() === '/students';
    $scope.registerPage = $location.path() === '/register';

	$scope.navigation = [
	{"text":"Lista de alumnos",   "link":"#!/students", "condition":$scope.studentPage},
	{"text":"Ingresar alumno",   "link":"#!/register", "condition":$scope.registerPage},
	];

}]);