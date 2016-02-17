app.controller('NavbarCtrl', [
  '$scope',
  '$rootScope',
  'utils',
  '$http',
  '$state',
  function($scope, $rootScope, utils, $http, $state) {
    $scope.$state = $state;
    $scope.showState = function() {
      console.log($scope.$state.$current.name);
      console.log($scope.$state.is('home'));
    }
  }
]);
