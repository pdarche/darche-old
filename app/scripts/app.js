'use strict';

/**
 * @ngdoc overview
 * @name darcheApp
 * @description
 * # darcheApp
 *
 * Main module of the application.
 */
angular
  .module('darcheApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
