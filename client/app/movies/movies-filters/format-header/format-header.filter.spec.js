'use strict';

describe('Filter: formatHeader', function () {

  // load the filter's module
  beforeEach(module('mementoMovieApp'));

  // initialize a new instance of the filter before each test
  var formatHeader;
  beforeEach(inject(function ($filter) {
    formatHeader = $filter('formatHeader');
  }));

  it('should return the input prefixed with "formatHeader filter:"', function () {
    var text = 'angularjs';
    expect(formatHeader(text)).toBe('formatHeader filter: ' + text);
  });

});
