'use strict';

angular.module('mementoMovieApp')
  .directive('navbar', function (Auth) {
    return {
      templateUrl: 'components/navbar/navbar.html',
      restrict: 'EA',
      controller: function ($scope, $location) {
        $scope.menu = [
          {
            'title': 'Home',
            'link': '/'
          },
          {
            'title': 'My Movies',
            'link': '/profile',
            'whenLoggedIn': true
          }
        ];
        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.isAdmin = Auth.isAdmin;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function() {
          Auth.logout();
          $location.path('/login');
        };

        $scope.isActive = function(route) {
          return route === $location.path();
        };
      },
      link: function (scope, element, attrs) {
      }
    };
  });

