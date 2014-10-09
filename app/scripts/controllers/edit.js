'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:EditCtrl
 * @description
 * # EdutCtrl
 * Controller 
 */
angular.module('darcheApp')
  .controller('EditCtrl', function ($scope, $routeParams, $http) {
	$http.get('data/posts.json').
	  success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
	    $scope.post = data.posts.filter(function(post){return post.slug === $routeParams.slug})[0];
	  });
  });
