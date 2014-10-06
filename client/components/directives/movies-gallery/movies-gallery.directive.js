'use strict';

angular.module('mementoMovieApp')
  .directive('moviesGallery', function () {
    return {
      templateUrl: 'components/directives/movies-gallery/movies-gallery.html',
      restrict: 'EA',
      scope: {
        model: '=',
        followMovie: '&',
        unfollowMovie: '&',
        hasMoreMovies: '&',
        showMore: '&'
      },
      link: function (scope, element, attrs) {
      }
    };
  });
