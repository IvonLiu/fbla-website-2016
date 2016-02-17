var app = angular.module('fbla', ['ui.router', 'firebase', 'smoothScroll']);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('index', {
        abstract: true,
        views: {
          '@': {
            templateUrl: 'layout.html',
            controller: 'IndexCtrl'
          },
          'navbar@index': {
            templateUrl: 'partials/navbar.html',
            controller: 'NavbarCtrl'
          }
        }
      })
      .state('sidebar', {
        parent: 'index',
        abstract: true,
        views: {
          'main@index': {
            templateUrl: 'partials/sidebar.html'
          }
        }
      })

    .state('home', {
      parent: 'index',
      url: '/home',
      views: {
        'main@index': {
          templateUrl: 'partials/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

    .state('menu', {
      parent: 'sidebar',
      url: '/menu',
      views: {
        'content@sidebar': {
          templateUrl: 'partials/menu.html',
          controller: 'MenuCtrl'
        },
        'side@sidebar': {
          templateUrl: 'partials/menu.side.html'
        }
      }
    })

    .state('menu.food', {
      url: '/food',
      views: {
        'content@sidebar': {
          templateUrl: 'partials/menu.html',
          controller: 'FoodMenuCtrl'
        }
      }
    })

    .state('menu.drinks', {
      url: '/drinks',
      views: {
        'content@sidebar': {
          templateUrl: 'partials/menu.html',
          controller: 'DrinksMenuCtrl'
        }
      }
    })

    .state('reservations', {
      parent: 'index',
      url: '/reservations',
      views: {
        'main@index': {
          templateUrl: 'partials/reservations.html',
          controller: 'ReservationsCtrl'
        }
      }
    })

    .state('reviews', {
      parent: 'index',
      url: '/reviews',
      views: {
        'main@index': {
          templateUrl: 'partials/reviews.html',
          controller: 'ReviewsCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('home');
  }
]);

app.run(['$rootScope', '$location', function($rootScope, $location) {
  $rootScope.setHash = function(id) {
    $location.hash(id);
    $rootScope.$apply();
  };
}]);

app.factory('utils', [function() {
  var utils = {};


  return utils;
}]);

app.factory('reservations', [
  '$firebaseArray',
  function($firebaseArray) {
    var ref = new Firebase('https://fbla-website-2016.firebaseio.com/reservations');
    return $firebaseArray(ref);
  }
]);

app.factory('reviews', [
  '$firebaseArray',
  function($firebaseArray) {
    var ref = new Firebase('https://fbla-website-2016.firebaseio.com/reviews');
    return $firebaseArray(ref);
  }
]);

app.controller('IndexCtrl', [
  '$scope',
  '$rootScope',
  'utils',
  '$http',
  '$state',
  '$window',
  function($scope, $rootScope, utils, $http, $state) {

  }
]);
