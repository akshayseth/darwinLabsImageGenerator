'use strict';

angular.module('hotelAppApp')
  .controller('RenderImageCtrl', function ($scope,$http) {
    $scope.message = 'Hello';
    var data=window.data;
    console.log("data is ");
    console.log(data);
    $scope.data=data;
  });
