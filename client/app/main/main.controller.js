'use strict';

angular.module('mementoMovieApp')
  .controller('MainCtrl', function ($scope, $stateParams, Profile, PaginatedMovie) {
    $scope.selectedFilter = _.chain($stateParams)
      .omit(function(value) { return !value; })
      .map(function(value, key) { return { key: key, value: value }; })
      .first()
      .value();

    PaginatedMovie.getItems($stateParams)
      .then(function(movies) {
        $scope.movies = movies;
      });

    PaginatedMovie.getService().getFilters()
      .then(function(filters) {
        $scope.filters = filters;
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
