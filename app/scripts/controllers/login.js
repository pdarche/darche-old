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
      var data = {name: $scope.user.username, password: $scope.user.password}

      $http.post('http://127.0.0.1:5984/_session', data).
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
