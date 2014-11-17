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
    'http-auth-interceptor',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pdDirectives',
    'pdFilters',
    'login'
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
        templateUrl: 'views/editPost.html',
        controller: 'EditPostCtrl'
      })
      .when('/blog/new/post',{
        templateUrl: 'views/editPost.html',
        controller: 'NewPostCtrl'
      })
      .when('/drafts/blog',{
        templateUrl: 'views/blog.html',
        controller: 'DraftPostCtrl'
      })
      .when('/projects',{
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:id', {
        templateUrl: 'views/project.html',
        controller: 'ProjectCtrl'
      })
      .when('/projects/edit/:id',{
        templateUrl: 'views/editProject.html',
        controller: 'EditProjectCtrl'
      })      
      .when('/projects/new/project',{
        templateUrl: 'views/editProject.html',
        controller: 'NewProjectCtrl'
      })
      .when('/drafts/projects',{
        templateUrl: 'views/projects.html',
        controller: 'DraftProjectCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .filter('markdown', ['md', function(md) {
    return function(input){
      if(input) return md.makeHtml(input);
    };
  }]);
