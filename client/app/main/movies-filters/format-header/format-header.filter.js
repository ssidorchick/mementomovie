'use strict';

angular.module('mementoMovieApp')
  .filter('formatHeader', function ($compile) {
    return function (filter, selectedFilter, isDesktop) {
      var template;
      if (selectedFilter && selectedFilter.key === filter.key) {
        template = '<strong>' + selectedFilter.value + '</strong>';
      } else {
        template = '<span>All </span><strong>' + filter.title + '</strong>';
      }
      if (isDesktop) {
        template = '<i class="fa fa-bars" /> ' + template;
      }

      return template;
    };
  });
