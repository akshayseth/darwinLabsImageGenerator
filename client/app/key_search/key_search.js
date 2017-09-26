'use strict';

angular.module('hotelAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('key_search', {
        url: '/key_search',
        templateUrl: 'app/key_search/key_search.html',
        controller: 'KeySearchCtrl'
      });
  });