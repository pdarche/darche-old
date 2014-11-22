'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the darcheApp
 */
angular.module('logout', ['http-auth-interceptor'])
  .controller('LogoutCtrl', function ($rootScope, $window, authService) {
    authService.loginCancelled();
    $rootScope.loggedIn = false;
    $rootScope.username = undefined;
	$rootScope.password = undefined;
    $window.location.href = '/#/';
  });