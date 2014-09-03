'use strict';

angular.module('mementoMovieApp')
  .controller('MainCtrl', function ($scope, Movie) {
    Movie.getAll().then(function(movies) {
      $scope.movies = movies;
    });

    $scope.pinMovie = function(movie) {
      Movie.pin(movie);
    };

    $scope.unpinMovie = function(movie) {
      Movie.unpin(movie);
    };
  });
