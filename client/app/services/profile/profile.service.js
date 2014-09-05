'use strict';

angular.module('mementoMovieApp')
  .service('Profile', function ($http) {
    this.getMovies = function() {
      return $http.get('/api/profiles/movies')
        .then(function(res) {
          var movies = res.data;
          movies.forEach(function(movie) {
            movie.following = true;
          });
          return movies;
        });
    };

    this.followMovie = function(movie) {
      $http.post('/api/profiles/movies/follow', { movieId: movie._id });
      movie.following = true;
    };

    this.unfollowMovie = function(movie) {
      $http.post('/api/profiles/movies/unfollow', { movieId: movie._id });
      movie.following = false;
    };
  });
