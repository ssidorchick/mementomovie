'use strict';

angular.module('mementoMovieApp')
  .directive('moviesFilters', function () {
    return {
      templateUrl: 'app/main/movies-filters/movies-filters.html',
      restrict: 'E',
      scope: {
        filters: '=',
        selectedFilter: '='
      },
      controller: function($scope) {
        $scope.filterClick = function(filter) {
          var prevValue = $scope[filter];

          _.each($scope.filters, function(filter) {
            $scope[filter.collapseKey] = false;
          });

          $scope[filter] = !prevValue;
        };
      },
      link: function (scope, element, attrs) {
      }
    };
  });
