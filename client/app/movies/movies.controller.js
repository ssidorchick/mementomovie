'use strict';

angular.module('mementoMovieApp')
  .controller('MoviesCtrl', function ($scope, $stateParams, Auth, Movie, Profile) {
    Movie.get($stateParams.id)
      .then(function(movie) {
        if (Auth.isLoggedIn()) {
          Profile.updateFollowing(movie)
            .then(function(movie) {
              $scope.model = movie;
            });
        } else {
          $scope.model = movie;
        }
      });

    $scope.isLoggedIn = Auth.isLoggedIn;

    $scope.followMovie = function() {
      Profile.followMovie($scope.model)
        .then(function() {
          $scope.model.following = true;
        });
    };

    $scope.unfollowMovie = function() {
      Profile.unfollowMovie($scope.model)
        .then(function() {
          $scope.model.following = false;
        });
    };
  });
