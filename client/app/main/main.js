'use strict';

angular.module('mementoMovieApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
          PaginatedMovie: function(Movie, Pagination) {
            return new Pagination(Movie);
          }
        }
      });
  });
