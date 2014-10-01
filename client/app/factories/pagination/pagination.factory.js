'use strict';

angular.module('mementoMovieApp')
  .factory('Pagination', function () {
    var ctor = function(service) {
      this.hasMore = true;
      this._service = service;
      this._items = [];
      this._options = {
        perPage: 12,
        page: 1
      };
    };

    ctor.prototype.getItems = function() {
      return this.loadMore()
        .then(function() {
          return this._items;
        }.bind(this));
    };

    ctor.prototype.loadMore = function() {
      return this._service.getAll(this._options)
        .then(function(data) {
          this.hasMore = data.current < data.last;

          var args = [this._items.length, 0].concat(data.results);
          Array.prototype.splice.apply(this._items, args);

          this._options.page += 1;
        }.bind(this));
    };

    ctor.prototype.getService = function() {
      return this._service;
    };

    return ctor;
  });
