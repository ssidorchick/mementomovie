'use strict';

angular.module('mementoMovieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('movie-details', {
        url: '/movies/:id',
        templateUrl: 'app/movie-details/movie-details.html',
        controller: 'MovieDetailsCtrl'
      });
  });
