'use strict';

angular.module('mementoMovieApp')
  .service('Movie', function ($http, $q, Auth, Profile) {
    var fetchMovies = function(options) {
      return $http.get('/api/movies', { params: options })
        .then(function(res) { return res.data; });
    };

    var populateProfileMovies = function(result) {
      if (_.isArray(result[0])) {
        return result[0].map(function(movie) {
          return _.find(result[1], { _id: movie._id }) || movie;
        });
      } else {
        return _.find(result[1], { _id: result[0]._id }) || result[0];
      }
    };

    this.getAll = function(options) {
      if (Auth.isLoggedIn()) {
        return $q.all([fetchMovies(options), Profile.getMovies()])
          .then(populateProfileMovies);
      } else {
        return fetchMovies(options);
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
