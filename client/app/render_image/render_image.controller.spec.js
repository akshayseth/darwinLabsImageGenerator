'use strict';

describe('Controller: RenderImageCtrl', function () {

  // load the controller's module
  beforeEach(module('hotelAppApp'));

  var RenderImageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RenderImageCtrl = $controller('RenderImageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
