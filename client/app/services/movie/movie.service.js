'use strict';

angular.module('mementoMovieApp')
  .service('Movie', function ($http, $q, Auth) {
    var updatePinState = function(all, pinned) {
      var ids = _.pluck(pinned, '_id');
      var shouldBePinned = _.filter(all, function(movie) {
        return _.contains(ids, movie._id);
      });
      shouldBePinned.forEach(function(movie) { movie.pinned = true; });
    };

    this.getAll = function() {
      return $http.get('/api/movies')
        .then(function(res) {
          var all = res.data;
          if (Auth.isLoggedIn()) {
            return $http.get('/api/profiles/movies')
              .then(function(res) {
                updatePinState(all, res.data);
                return all;
              });
          } else {
            var deferred = $q.defer();
            deferred.resolve(all);
            return deferred.promise;
          }
        });
    };

    this.getProfile = function() {
      return $http.get('/api/profiles/movies')
        .then(function(res) {
          var movies = res.data;
          movies.forEach(function(movie) {
            movie.pinned = true;
          });
          return movies;
        });
    };

    this.pin = function(movie) {
      $http.post('/api/movies/pin', { movieId: movie._id });
      movie.pinned = true;
    };

    this.unpin = function(movie) {
      $http.post('/api/movies/unpin', { movieId: movie._id });
      movie.pinned = false;
    };
  });
