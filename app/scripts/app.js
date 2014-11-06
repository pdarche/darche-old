'use strict';

var Darche = Darche || {};

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
      .when('/blog/:slug', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/blog/edit/:slug',{
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
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


 Darche.helpers = {
   isNotString: function(str) {
     return (typeof str !== "string");
   },
   guid: function(){
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
                 .toString(16)
                 .substring(1);
    }    
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
           s4() + '-' + s4() + s4() + s4();
   }
 };
