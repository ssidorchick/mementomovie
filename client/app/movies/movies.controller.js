'use strict';

angular.module('mementoMovieApp')
  .controller('MoviesCtrl', function ($scope, $stateParams, Auth, Movie, Profile) {
    Movie.get($stateParams.id)
      .then(function(movie) {
        $scope.model = movie;
    });

    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.followMovie = function() {
      Profile.followMovie($scope.model);
    };

    $scope.unfollowMovie = function() {
      Profile.unfollowMovie($scope.model);
    };
  });
