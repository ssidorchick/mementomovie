'use strict';

describe('Filter: formatValue', function () {

  // load the filter's module
  beforeEach(module('mementoMovieApp'));

  // initialize a new instance of the filter before each test
  var formatValue;
  beforeEach(inject(function ($filter) {
    formatValue = $filter('formatValue');
  }));

  it('should return the input prefixed with "formatValue filter:"', function () {
    var text = 'angularjs';
    expect(formatValue(text)).toBe('formatValue filter: ' + text);
  });

});
