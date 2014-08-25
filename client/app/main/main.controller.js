'use strict';

angular.module('mementoMovieApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/movies').success(function(movies) {
      $scope.movies = movies;
    });
  });
