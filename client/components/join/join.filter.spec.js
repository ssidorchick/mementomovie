'use strict';

describe('Filter: join', function () {

  // load the filter's module
  beforeEach(module('mementoMovieApp'));

  // initialize a new instance of the filter before each test
  var join;
  beforeEach(inject(function ($filter) {
    join = $filter('join');
  }));

  it('should return the input prefixed with "join filter:"', function () {
    var text = 'angularjs';
    expect(join(text)).toBe('join filter: ' + text);
  });

});
