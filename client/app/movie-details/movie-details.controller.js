'use strict';

angular.module('mementoMovieApp')
  .controller('MovieDetailsCtrl', function ($scope, $stateParams, Auth, Movies, Profile) {
    Movies.get($stateParams.permalink)
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
