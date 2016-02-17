app.directive('slide', [
  '$window',
  function($window) {
    return {
      restrict: 'A',
      scope: {},
      link: function(scope, elem, attrs) {
        scope.onResize = function() {
          var navbar = $('.navbar')[0];
          var height = $window.innerHeight - navbar.clientHeight;
          elem.css('height', height);
        };
        scope.onResize();
        angular.element($window).bind('resize', function() {
          scope.onResize();
        });
      }
    }
  }
]);

app.controller('HomeCtrl', [
  '$scope',
  'utils',
  '$anchorScroll',
  '$location',
  '$timeout',
  function($scope, utils, $anchorScroll, $location, $timeout) {
    $timeout(function() {
      $anchorScroll();
    }, 0)
  }
]);
