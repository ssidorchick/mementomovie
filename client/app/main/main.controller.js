'use strict';

angular.module('mementoMovieApp')
  .controller('MainCtrl', function ($scope, Movie, Profile) {
    Movie.getAll().then(function(movies) {
      $scope.movies = movies;
    });

    $scope.followMovie = function(movie) {
      Profile.followMovie(movie);
    };

    $scope.unfollowMovie = function(movie) {
      Profile.unfollowMovie(movie);
    };
  });
