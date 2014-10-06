'use strict';

describe('Directive: movieGallery', function () {

  // load the directive's module and view
  beforeEach(module('mementoMovieApp'));
  beforeEach(module('components/movie-gallery/movie-gallery.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<movie-gallery></movie-gallery>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the movieGallery directive');
  }));
});