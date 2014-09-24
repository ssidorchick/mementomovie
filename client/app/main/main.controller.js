'use strict';

angular.module('mementoMovieApp')
  .controller('MainCtrl', function ($scope, Profile, PaginatedMovie) {
    PaginatedMovie.getItems()
      .then(function(movies) {
        $scope.movies = movies;
      });

    $scope.hasMoreMovies = function() { return PaginatedMovie.hasMore; };

    $scope.followMovie = function(movie) {
      Profile.followMovie(movie);
    };

    $scope.unfollowMovie = function(movie) {
      Profile.unfollowMovie(movie);
    };

    $scope.showMore = function() {
      PaginatedMovie.loadMore();
    };
  });
