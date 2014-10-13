'use strict';

angular.module('mementoMovieApp')
  .filter('ordinalDate', function ($filter) {
    var suffixes = ["th", "st", "nd", "rd"];

    return function(input) {
      if (!input) {
        return;
      }

      var date;

      if (input.indexOf('9999') === 0) {
        return 'TBA';
      } else if (input.indexOf('99') === 5) {
        return input.slice(0, 4);
      } else if (input.indexOf('99') === 8) {
        date = new Date(input.slice(0, 7));
        return $filter('date')(date, 'MMMM yyyy');
      } else {
        date = new Date(input);
        var monthYear = $filter('date')(date, 'MMMM yyyy').split(' ');
        var day = date.getDate();
        var suffix = (day <= 3) ? suffixes[day] : suffixes[0];
        return monthYear[0] + ' ' + day + suffix + ', ' + monthYear[1];
      }
    };
  });
