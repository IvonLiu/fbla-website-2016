app.controller('ReviewsCtrl', [
  '$scope',
  'utils',
  'reviews',
  function($scope, utils, reviews) {

    $scope.reviews = reviews;

    $scope.addReview = function() {
      $scope.reviews.$add({
        timestamp: moment().format(),
        email: $scope.email,
        name: $scope.name,
        content: $scope.content
      });
      $scope.email = '';
      $scope.name = '';
      $scope.content = '';
    }
  }
]);
