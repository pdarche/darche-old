'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the darcheApp
 */
angular.module('logout', ['http-auth-interceptor'])
  .controller('LogoutCtrl', function ($rootScope, authService) {
    // authService.loginCancelled();
    // probably need to broadcast that the 
    // user should be removed
    // $rootScope.loggedIn = false;
  });