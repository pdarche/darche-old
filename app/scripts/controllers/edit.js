'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller 
 */
angular.module('darcheApp')
  .controller('EditCtrl', function ($scope, $routeParams, $http, Post) {
  	$scope.post = Post.get({id: $routeParams.id});
  	$scope.submit = function() {
  		Post.update({id: $scope.post._id}, $scope.post);
  	}
  });
