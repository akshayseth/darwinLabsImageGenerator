'use strict';

describe('Controller: KeySearchCtrl', function () {

  // load the controller's module
  beforeEach(module('hotelAppApp'));

  var KeySearchCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    KeySearchCtrl = $controller('KeySearchCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
