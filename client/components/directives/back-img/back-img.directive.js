'use strict';

angular.module('mementoMovieApp')
  .directive('backImg', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        attrs.$observe('backImg', function(value) {
          if (!value) {
            return;
          }
          element.css({'background-image': 'url(' + value + ')'});
        });
      }
    };
  });
