app.controller('studentController', ['$scope','$http', function($scope,$http) {
	
    $scope.students = [];

    $scope.loadStudents = function(){
        $http.get('/students').then(function(response){
            $scope.students = response.data._embedded.students;
        });
    }

    $scope.loadStudents();

}]);