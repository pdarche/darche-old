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
    'ngTouch',
    'pdDirectives',
    'pdFilters'
  ])
  .value('md', new Showdown.converter())
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
      .when('/blog/:id', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/blog/edit/:id',{
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/blog/new/post',{
        templateUrl: 'views/edit.html',
        controller: 'NewPostCtrl'
      })
      .when('/drafts',{
        templateUrl: 'views/blog.html',
        controller: 'DraftPostCtrl'
      })
      .when('/projects',{
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('markdown', ['md', function(md){
    return function(input){
      if(input) return md.makeHtml(input);
    };
  }]);
