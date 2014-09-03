'use strict';

angular.module('mementoMovieApp')
  .controller('MainCtrl', function ($scope, Movie, Profile) {
    Movie.getAll().then(function(movies) {
      $scope.movies = movies;
    });

    $scope.pinMovie = function(movie) {
      Profile.pinMovie(movie);
    };

    $scope.unpinMovie = function(movie) {
      Profile.unpinMovie(movie);
    };
  });
