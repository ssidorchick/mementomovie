'use strict';

angular.module('mementoMovieApp')
  .service('Movies', function ($http, $q, Auth, Profile) {
    var filterTitles = {
      year: 'Years',
      director: 'Directors',
      actor: 'Actors'
    };

    var fetchMovies = function(options) {
      return $http.get('/api/movies', { params: options, cache: true})
        .then(function(res) { return res.data; });
    };

    var populateProfileMovies = function(result) {
      if (_.isArray(result[0].results)) {
        result[0].results = result[0].results.map(function(movie) {
          return _.find(result[1], { _id: movie._id }) || movie;
        });
        return result[0];
      } else {
        return _.find(result[1], { _id: result[0]._id }) || result[0];
      }
    };

    this.getAll = function(options) {
      return Auth.isLoggedInPromise()
        .then(function(isLoggedIn) {
          if (isLoggedIn) {
            return $q.all([fetchMovies(options), Profile.getMovies()])
              .then(populateProfileMovies);
          } else {
            return fetchMovies(options);
          }
        });
    };

    this.get = function(permalink) {
      return $http.get('/api/movies/' + permalink, { cache: true })
        .then(function(res) {
          return Auth.isLoggedInPromise()
            .then(function(isLoggedIn) {
              if (isLoggedIn) {
              var deferred = $q.defer();
              deferred.resolve(res.data);
              return $q.all([deferred.promise, Profile.getMovies()])
                .then(populateProfileMovies);
              } else {
                return res.data;
              }
            });
        });
    };

    this.getFilters = function() {
      return $http.get('/api/movies/filters', { cache: true })
        .then(function(res) {
          return _.map(res.data, function(value, key) {
            return {
              key: key,
              dropdownKey: key + 'FilterMenu',
              collapseKey: 'is' + key + 'FilterCollapsed',
              title: filterTitles[key],
              value: value
            };
          });
        });
    };
  });
