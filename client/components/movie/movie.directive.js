'use strict';

angular.module('mementoMovieApp')
  .directive('movie', function (Auth) {
    return {
      templateUrl: 'components/movie/movie.html',
      restrict: 'EA',
      scope: {
        data: '=',
        pin: '&'
      },
      link: function (scope, element, attrs) {
        scope.isLoggedIn = Auth.isLoggedIn;
      }
    };
  });
