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
    'login',
    'logout',
    'hc.marked'
  ])
  .config(['markedProvider', function(markedProvider) {
      markedProvider.setOptions({gfm: true, tables: true});
    }])
  .config(function ($routeProvider, $httpProvider) {  
    $httpProvider.interceptors.push(function($rootScope, $location, $q) {
      return {
        'request': function(request) {
          // if we're not logged-in to the AngularJS app, redirect to login page
          var protectedRoutes = /new|edit|drafts/g;
          $rootScope.loggedIn = $rootScope.loggedIn || $rootScope.username;
          if (!$rootScope.loggedIn && $location.path().search(protectedRoutes) !== -1) {
            $location.path('/');
          }
          return request;
        },
        'responseError': function(rejection) {
          // if we're not logged-in to the web service, redirect to login page
          if (rejection.status === 401 && $location.path() != '/login') {
            $rootScope.loggedIn = false;
            $location.path('/login');
          }
          return $q.reject(rejection); 
        }
      };
    });

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
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
