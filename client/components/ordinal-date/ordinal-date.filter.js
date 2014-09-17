'use strict';

angular.module('mementoMovieApp')
  .filter('ordinalDate', function ($filter) {
    var suffixes = ["th", "st", "nd", "rd"];

    return function(input) {
      if (!input) {
        return;
      }
      var date = new Date(input);
      var monthYear = $filter('date')(date, 'MMMM yyyy').split(' ');
      var day = date.getDate();
      var suffix = (day <= 3) ? suffixes[day] : suffixes[0];
      return monthYear[0] + ' ' + day + suffix + ', ' + monthYear[1];
    };
  });
