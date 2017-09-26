'use strict';

angular.module('hotelAppApp')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};
    $scope.stuff = [
      'Welcome to Darwin Image Generator...',
      'Get ready to step into the app which downloads compressed greyscaled images from google...',
      'Image downloads are never this easy...',
      'Darwin Labs tends to lead people to do things which they would find troublesome...'
    ];
    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          console.log(Auth.login.email);
          if($scope.user.email=='admin@admin.com' && $scope.user.password=='admin'){
            $location.path('/admin');
          }
          else {
            $location.path('/search');
          }
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });
