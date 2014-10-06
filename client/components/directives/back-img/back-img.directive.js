'use strict';

angular.module('mementoMovieApp')
  .directive('backImg', function ($http) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var setImage = function(value) {
          element.css({'background-image': 'url(' + value + ')'});
        };

        attrs.$observe('backImg', function(value) {
          if (!value) {
            return;
          }

          if (attrs.errSrc) {
            $http.get(value)
              .success(function() {
                setImage(value);
              })
              .error(function() {
                setImage(attrs.errSrc);
              });
          } else {
            setImage(value);
          }
        });
      }
    };
  });
