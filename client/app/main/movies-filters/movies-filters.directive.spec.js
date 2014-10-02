'use strict';

describe('Directive: moviesFilter', function () {

  // load the directive's module and view
  beforeEach(module('mementoMovieApp'));
  beforeEach(module('app/main/movies-filter/movies-filter.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<movies-filter></movies-filter>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the moviesFilter directive');
  }));
});