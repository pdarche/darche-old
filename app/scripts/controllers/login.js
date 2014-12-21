'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the darcheApp
 */
angular.module('login', ['http-auth-interceptor', 'ngCookies'])
  .controller('LoginCtrl', ['$scope', '$rootScope', '$http', '$location', '$timeout', '$window', 'authService', function ($scope, $rootScope, $http, $location, $timeout, $window, authService) {
    $scope.user = {username: '', password: ''};

    $scope.login = function() {
      // REFACTOR: change this to a Service / Factory
      var reqData = {
        name: $scope.user.username,
        password: $scope.user.password
      };

      $http.post('http://127.0.0.1:5984/_session', reqData, {withCredentials: true}).
        success(function(data, status, headers, config) {
          authService.loginConfirmed();
          $window.sessionStorage.token = 'authenticated';
          $rootScope.loggedIn = true;
          $rootScope.username = $scope.user.username;
          $rootScope.password = $scope.user.password;
          $location.path('/');
        }).
        error(function(){
          $rootScope.loggedIn = false;
          alert("Sorry, incorrect password");
        });
    }
  }]);
