'use strict';

angular.module('mementoMovieApp')
  .service('Movie', function ($http, $q, Auth, Profile) {
    var fetchMovies = function() {
      return $http.get('/api/movies')
        .then(function(res) { return res.data; });
    };

    var populateProfileMovies = function(result) {
      return result[0].map(function(movie) {
        return _.find(result[1], { _id: movie._id }) || movie;
      });
    };

    this.getAll = function() {
      if (Auth.isLoggedIn()) {
        return $q.all([fetchMovies(), Profile.getMovies()])
          .then(populateProfileMovies);
      } else {
        return fetchMovies();
      }
    };

    this.get = function(id) {
      return $http.get('/api/movies/' + id)
        .then(function(res) { return res.data; });
    };
  });
