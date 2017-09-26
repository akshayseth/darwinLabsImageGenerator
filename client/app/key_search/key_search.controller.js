'use strict';

angular.module('hotelAppApp')
  .controller('KeySearchCtrl', function ($scope,$http,Auth,$window,$timeout) {
    $timeout( function(){
      var id=Auth.getCurrentUser()._id;
      console.log(id);
      $http.get('/api/searchs/idk?id='+id).success(function(searched_index){
        console.log(searched_index);
        $scope.searched_index=searched_index;
      });
      $scope.show_images=function(data){
        console.log("data is",data);
        $window.open('/render_image').data=data;
      }
    }, 2000 );

  });
