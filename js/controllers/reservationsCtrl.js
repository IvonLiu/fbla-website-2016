app.controller('ReservationsCtrl', [
  '$scope',
  'utils',
  'reservations',
  function($scope, utils, reservations) {

    $scope.reservations = reservations;

    $scope.createReservation = function() {
      $scope.reservations.$add({
        partySize: $scope.partySize,
        time: $scope.time,
        email: $scope.email
      });
      $scope.partySize = undefined;
      $scope.time = '';
      $scope.email = '';
    }

  }
]);
