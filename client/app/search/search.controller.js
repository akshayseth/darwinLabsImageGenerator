'use strict';

angular.module('hotelAppApp')
  .controller('SearchCtrl', function ($scope,$http,Auth) {
    var id=Auth.getCurrentUser()._id;
    console.log(id);
    $scope.loader=false;

    $scope.submit=function(){
      if($scope.search!="" && $scope.search!='' && $scope.search!=undefined && $scope.search!=null){
      $scope.loader=true;
    	console.log(id);
      $http.get('/api/searchs?search_key='+$scope.search+'&user_details='+id).success(function(category){
        $scope.loader=false;
        alert('download completed');
      });
    }
      else{
        console.log("else")
        alert('A blank image is of no use !')
      }
  }

  });
