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

    this.updateFollowing = function(movie) {
      return this.getMovies()
        .then(function(movies) {
          return _.find(movies, { _id: movie._id }) || movie;
        });
    };

    this.followMovie = function(movie) {
      return $http.post('/api/profiles/movies/follow', { movieId: movie._id })
        .then(function() {
          movie.following = true;
        });
    };

    this.unfollowMovie = function(movie) {
      return $http.post('/api/profiles/movies/unfollow', { movieId: movie._id })
        .then(function() {
          movie.following = false;
        });
    };
  });
