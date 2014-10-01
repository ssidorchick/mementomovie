'use strict';

angular.module('mementoMovieApp')
  .controller('MainCtrl', function ($scope, Profile, PaginatedMovie) {
    PaginatedMovie.getItems()
      .then(function(movies) {
        $scope.movies = movies;
      });

    PaginatedMovie.getService().getFilters()
      .then(function(filters) {
        $scope.filters = filters;
      });

    $scope.filterClick = function(filter) {
      var prevValue = $scope[filter];

      _.each($scope.filters, function(filter) {
        $scope[filter.collapseKey] = false;
      });

      $scope[filter] = !prevValue;
    };

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
