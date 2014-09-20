'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the darcheApp
 */
angular.module('darcheApp')
  .controller('BlogCtrl', function ($scope, $http) {
    $http.get('data/posts.json').
	  success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
	    $scope.posts = data.posts
	  });
  });