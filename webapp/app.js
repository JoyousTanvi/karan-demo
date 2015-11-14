'use strict';

var webApp = angular.module("webApp", ['ngRoute']);

webApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/dashboard', {
      templateUrl: 'partials/dashboard.html', controller: 'dashboardController'
   }).
   
   when('/landing', {
      templateUrl: 'partials/landing.html', controller: 'indexController'
   }).

   otherwise({
      redirectTo: '/landing'
   });

   
}]);