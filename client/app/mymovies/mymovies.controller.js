'use strict';

angular.module('mementoMovieApp')
  .controller('MymoviesCtrl', function ($scope, $http) {
    $http.get('/api/profiles/movies').success(function(movies) {
      $scope.movies = movies;
    });
  });
