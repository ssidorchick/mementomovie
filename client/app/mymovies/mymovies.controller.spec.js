'use strict';

describe('Controller: MymoviesCtrl', function () {

  // load the controller's module
  beforeEach(module('mementoMovieApp'));

  var MymoviesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MymoviesCtrl = $controller('MymoviesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
