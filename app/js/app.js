(function() {

  var app = angular.module('fishbowl', ['fishbowl.config']);

  app.controller('CatalogController', [ '$http', 'CONFIG', function($http, CONFIG) {
    var catalog = this;

    catalog.movies = [];

    catalogUrl = 'http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/current_releases.json';

    $http.jsonp(catalogUrl, {
        params: {
            apikey: CONFIG.ROTTEN_TOMATOES,
            callback: 'JSON_CALLBACK'
        }
    })
    .success(function (data) {
  
        catalog.movies = data;
        catalog.movies = data.movies;
        console.log(catalog.movies);

    });

  }]);


})();