'use strict';

angular.module('mementoMovieApp')
  .controller('MoviesCtrl', function ($scope, $stateParams, Profile, PaginatedMovies) {
    $scope.selectedFilter = _.chain($stateParams)
      .omit(function(value) { return !value; })
      .map(function(value, key) { return { key: key, value: value }; })
      .first()
      .value();

    PaginatedMovies.getItems($stateParams)
      .then(function(movies) {
        $scope.movies = movies;
      });

    PaginatedMovies.getService().getFilters()
      .then(function(filters) {
        $scope.filters = filters;
      });

    $scope.hasMoreMovies = function() { return PaginatedMovies.hasMore; };

    $scope.followMovie = function(movie) {
      Profile.followMovie(movie);
    };

    $scope.unfollowMovie = function(movie) {
      Profile.unfollowMovie(movie);
    };

    $scope.showMore = function() {
      PaginatedMovies.loadMore();
    };
  });
