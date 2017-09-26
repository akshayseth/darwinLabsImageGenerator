'use strict';

angular.module('hotelAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('render_image', {
        url: '/render_image',
        templateUrl: 'app/render_image/render_image.html',
        controller: 'RenderImageCtrl'
      });
  });