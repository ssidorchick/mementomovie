'use strict';

angular.module('mementoMovieApp')
  .controller('MymoviesCtrl', function ($scope, Movie) {
    Movie.getProfile().then(function(movies) {
      $scope.movies = movies;
    });

    $scope.pinMovie = function(movie) {
      Movie.pin(movie);
    };

    $scope.unpinMovie = function(movie) {
      Movie.unpin(movie);
      $scope.movies = _.without($scope.movies, movie);
    };
  });
