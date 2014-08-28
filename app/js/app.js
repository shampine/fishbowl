(function() {

  var app = angular.module('fishbowl', ['fishbowl.config']);

  app.controller('CatalogController', [ '$http', 'CONFIG', function($http, CONFIG) {
    var catalog = this;

    catalog.movies = [];

    catalogURL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';

    $http.jsonp(catalogURL, {
      params: {
        apikey: CONFIG.ROTTEN_TOMATOES,
        callback: 'JSON_CALLBACK'
      }
    })
    .success(function (data) {
  
        catalog.movies = data.movies;

    });

  }]);

})();
