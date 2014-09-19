'use strict';

angular.module('mementoMovieApp')
  .service('Movie', function ($http, $q, Auth, Profile) {
    var fetchMovies = function() {
      return $http.get('/api/movies')
        .then(function(res) { return res.data; });
    };

    var populateProfileMovies = function(result) {
      if (_.isArray(result[0])) {
        return result[0].map(function(movie) {
          return _.find(result[1], { _id: movie._id }) || movie;
        });
      } else {
        return _.find(result[1], { _id: result[0]._id }) || movie;
      }
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
        .then(function(res) {
          if (Auth.isLoggedIn()) {
            var deferred = $q.defer();
            deferred.resolve(res.data);
            return $q.all([deferred.promise, Profile.getMovies()])
              .then(populateProfileMovies);
          } else {
            return res.data;
          }
        });
    };
  });
