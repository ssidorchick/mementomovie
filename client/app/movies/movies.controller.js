'use strict';

angular.module('mementoMovieApp')
  .controller('MoviesCtrl', function ($scope, $stateParams, Movie) {
    Movie.get($stateParams.id)
      .then(function(movie) {
        $scope.model = movie;
      });
  });
