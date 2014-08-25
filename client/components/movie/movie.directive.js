'use strict';

angular.module('mementoMovieApp')
  .directive('movie', function () {
    return {
      templateUrl: 'components/movie/movie.html',
      restrict: 'EA',
      scope: {
        data: '='
      },
      link: function (scope, element, attrs) {
      }
    };
  });
