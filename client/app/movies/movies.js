'use strict';

angular.module('mementoMovieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('movies', {
        url: '/?year&director&actor',
        templateUrl: 'app/movies/movies.html',
        controller: 'MoviesCtrl',
        resolve: {
          PaginatedMovies: ['Movies', 'Pagination', function(Movies, Pagination) {
            return new Pagination(Movies);
          }]
        }
      });
  });
