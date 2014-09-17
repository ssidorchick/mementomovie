'use strict';

angular.module('mementoMovieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('movies', {
        url: '/movies/:id',
        templateUrl: 'app/movies/movies.html',
        controller: 'MoviesCtrl'
      });
  });
