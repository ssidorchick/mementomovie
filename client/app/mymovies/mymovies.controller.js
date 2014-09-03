'use strict';

angular.module('mementoMovieApp')
  .controller('MymoviesCtrl', function ($scope, Profile) {
    Profile.getMovies().then(function(movies) {
      $scope.movies = movies;
    });

    $scope.pinMovie = function(movie) {
      Profile.pinMovie(movie);
    };

    $scope.unpinMovie = function(movie) {
      Profile.unpinMovie(movie);
      $scope.movies = _.without($scope.movies, movie);
    };
  });
