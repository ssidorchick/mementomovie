'use strict';

angular.module('mementoMovieApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {
    $http.get('/api/movies').success(function(movies) {
      $scope.movies = movies;
    });

    $scope.pinMovie = function(movie) {
      $http.post('/api/movies/pin', { movieId: movie._id });
    };
  });
