'use strict';

angular.module('mementoMovieApp')
  .filter('formatValue', function () {
    return function (input, filter, isLast) {
      return filter.key === 'year' && isLast ? input + ' and later' : input;
    };
  });
