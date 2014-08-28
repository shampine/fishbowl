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