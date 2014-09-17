'use strict';

describe('Filter: ordinalDate', function () {

  // load the filter's module
  beforeEach(module('mementoMovieApp'));

  // initialize a new instance of the filter before each test
  var ordinalDate;
  beforeEach(inject(function ($filter) {
    ordinalDate = $filter('ordinalDate');
  }));

  it('should return the input prefixed with "ordinalDate filter:"', function () {
    var text = 'angularjs';
    expect(ordinalDate(text)).toBe('ordinalDate filter: ' + text);
  });

});
