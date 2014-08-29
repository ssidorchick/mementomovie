'use strict';

angular.module('mementoMovieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mymovies', {
        url: '/mymovies',
        templateUrl: 'app/mymovies/mymovies.html',
        controller: 'MymoviesCtrl'
      });
  });