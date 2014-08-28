$scope.movieList = {};
movieFactory.movieList()
  .then(function (components) {
    $scope.movieList = components;
    console.log(components);
  }, function (error) {
    console.error(error);
});