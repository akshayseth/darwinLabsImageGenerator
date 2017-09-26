'use strict';

angular.module('hotelAppApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User,$rootScope,$modal,$timeout) {
    $scope.flag=0;
    $scope.thisis=true;
    $http.get('/api/tempdbs').success(function(data1){
      console.log("data is");
      console.log(data1);
      $scope.categories=data1;
    });
    $scope.lolo=function(id){
      $scope.thisis=false;
      for(var i=0;i<$scope.categories.length;i++){
        if($scope.categories[i].name==id){
          $scope.rate=$scope.categories[i].rate;
          $scope.taxes=$scope.categories[i].taxes;
          $scope.bed=$scope.categories[i].extraBed;
        }
      }
    }
    $scope.createRoom=function(){
      $http.get('/api/things').success(function(data){
      for(var i=0;i<data.length;i++){
        if(data[i].room==$scope.roomNum){
          $scope.warn=true;
          $scope.flag=1;
          $scope.warn=true;
          $timeout(function () {
            $scope.warn=false;
          }, 3000);
        }
      }

        if($scope.flag==0){
          $http.post('/api/things',{'room':$scope.roomNum,'category':$scope.category,'status':{start:null,end:null},rate:$scope.rate,taxes:$scope.taxes,extrabed:$scope.bed}).success(function(data){
            console.log("checking taxes");
            console.log($scope.taxes);
            var modalInstance = $modal.open({
              templateUrl: 'myModalContent2.html',
              controller: 'myModalCtrl2',
              scope:$scope,
            });

          });}
      });

    }
  }).controller('myModalCtrl2',function($scope,$modalInstance) {
  $scope.apply = function () {
    $modalInstance.dismiss();
  };
});
