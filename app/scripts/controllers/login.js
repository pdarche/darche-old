'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the darcheApp
 */
angular.module('login', ['http-auth-interceptor'])
  .controller('LoginCtrl', function ($scope, $rootScope, $http, $location, authService) {
    $scope.user = {username: '', password: ''};

    $scope.login = function() {      
      // REFACTOR: change this to a Service / Factory
      var url = 'http://127.0.0.1:5984/password/' + $scope.user.password;
      $http.get(url).
        success(function(data) {
          authService.loginConfirmed();
          $rootScope.loggedIn = true;
          $location.path('/');
        }).
        error(function(){
          alert("Sorry, incorrect password");
        });
    }
  });
