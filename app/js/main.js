(function() {

  var app = angular.module('fishbowl', ['fishbowl.config', 'loadMovies']);

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


var config_module = angular.module('fishbowl.config', [])
  .constant('CONFIG', {
    'APP_NAME': 'fishbowl',
    'APP_VERSION': '0.0.1',
    'ROTTEN_TOMATOES': '7tsnf39ubznbws9cvh76vbnu'
});
angular.module('loadMovies')
  .factory('jsonFactory', function ($q, $http) {
    return {
      getOtherStuff: function () {
        var deferred = $q.defer(),
          httpPromise = $http.get('data/movies.json');
 
        httpPromise.then(function (response) {
          deferred.resolve(response);
        }, function (error) {
          console.error(error);
        });
 
        console.log(deferred.promise);
        return deferred.promise;
      }
    };
  });
$scope.movieList = {};

movieFactory.movieList()
  .then(function (components) {

    $scope.movieList = components;
    console.log(components);

  }, function (error) {

    console.error(error);

});