'use strict';

angular.module('mementoMovieApp')
  .service('Profile', function ($http) {
    this.getMovies = function() {
      return $http.get('/api/profiles/movies')
        .then(function(res) {
          var movies = res.data;
          movies.forEach(function(movie) {
            movie.pinned = true;
          });
          return movies;
        });
    };

    this.pinMovie = function(movie) {
      $http.post('/api/profiles/movies/pin', { movieId: movie._id });
      movie.pinned = true;
    };

    this.unpinMovie = function(movie) {
      $http.post('/api/profiles/movies/unpin', { movieId: movie._id });
      movie.pinned = false;
    };
  });
