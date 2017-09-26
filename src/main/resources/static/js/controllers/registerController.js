app.controller('registerController', ['$scope','$http', function($scope,$http) {
	
	$scope.students = [];
    $scope.newStudent = {};

    $scope.resetNewStudent = function(){
        $scope.newStudent = {
        "rut":"",
        "name":"",
        "email":"",
        "career":"",
        "entry":0
        }
    }

   $scope.resetNewStudent();
   
   $scope.send = function(){
        console.log($scope.newStudent);
        var student = {
            "rut":$scope.newStudent.rut,
            "name":$scope.newStudent.name,
            "email":$scope.newStudent.email,
            "career":$scope.newStudent.career,
            "entry":$scope.newStudent.entry
        };
       
        $http.post('/students',student).then(function(response){
            console.log(response);
            var studentUrl = response.data._links.student.href;
         
                $http.post(studentUrl,{headers:{'Content-Type':'text/uri-list'}}).then(function(response){
                    console.log(response);
                });
            
            $scope.resetNewStudent();
        });
    }

}]);