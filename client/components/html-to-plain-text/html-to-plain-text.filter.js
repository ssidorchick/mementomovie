'use strict';

angular.module('mementoMovieApp')
  .filter('htmlToPlainText', function () {
    return function (input) {
      return angular.element(input).text();
    };
  });
