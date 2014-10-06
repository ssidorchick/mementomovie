'use strict';

angular.module('mementoMovieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('movies', {
        url: '/?year&director&actor',
        templateUrl: 'app/movies/movies.html',
        controller: 'MoviesCtrl',
        resolve: {
          PaginatedMovies: function(Movies, Pagination) {
            return new Pagination(Movies);
          }
        }
      });
  });
