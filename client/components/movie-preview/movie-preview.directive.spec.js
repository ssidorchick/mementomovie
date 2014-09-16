'use strict';

describe('Directive: moviePreview', function () {

  // load the directive's module and view
  beforeEach(module('mementoMovieApp'));
  beforeEach(module('components/movie-preview/movie-preview.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<movie-preview></movie-preview>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the moviePreview directive');
  }));
});