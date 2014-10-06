'use strict';

angular.module('mementoMovieApp')
  .controller('ProfileCtrl', function ($scope, Profile) {
    Profile.getMovies().then(function(movies) {
      $scope.movies = movies;
    });

    $scope.followMovie = function(movie) {
      Profile.followMovie(movie);
    };

    $scope.unfollowMovie = function(movie) {
      Profile.unfollowMovie(movie)
        .then(function() {
          $scope.movies = _.without($scope.movies, movie);
        });
    };
  });
