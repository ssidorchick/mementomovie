'use strict';

angular.module('mementoMovieApp')
  .filter('join', function () {
    return function (input, delimeter) {
      return (input || []).join(delimeter || ', ');
    };
  });
