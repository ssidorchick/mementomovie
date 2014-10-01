'use strict';

angular.module('mementoMovieApp')
  .controller('MainCtrl', function ($scope, Profile, PaginatedMovie) {
    PaginatedMovie.getItems()
      .then(function(movies) {
        $scope.movies = movies;
      });

    $scope.filters = [
      {
        dropdownKey: 'yearFilterMenu',
        collapseKey: 'isYearFilterCollapsed',
        title: 'Filter by Year',
        value: [
          2014,
          2015,
          2016,
          2017
        ]
      },
      {
        dropdownKey: 'directorFilterMenu',
        collapseKey: 'isDirectorFilterCollapsed',
        title: 'Filter by Director',
        value: [
          "Peter Jackson",
          "Quentine Tarantino",
          "Christopher Nolan",
          "Quentine Tarantino 2",
          "Quentine Tarantino 3",
          "Christopher Nolan 2",
          "Christopher Nolan 3",
          "Anderson"
        ]
      },
      {
        dropdownKey: 'actorFilterMenu',
        collapseKey: 'isActorFilterCollapsed',
        title: 'Filter by Actor',
        value: [
          "Leonardo Dicaprio",
          "Samual L Jackson",
          "Jonnie Depp",
          "Leonardo Dicaprio 2",
          "Samual L Jackson 2",
          "Jonnie Depp 2",
          "Samual L Jackson 3",
          "Jonnie Depp 3",
          "Bruce Willies"
        ]
      }
    ];

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
