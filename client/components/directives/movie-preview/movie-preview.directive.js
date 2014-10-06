'use strict';

angular.module('mementoMovieApp')
  .directive('moviePreview', function (Auth) {
    return {
      templateUrl: 'components/directives/movie-preview/movie-preview.html',
      restrict: 'EA',
      scope: {
        model: '=',
        follow: '&',
        unfollow: '&'
      },
      link: function (scope, element, attrs) {
        scope.isLoggedIn = Auth.isLoggedIn;
      }
    };
  });
