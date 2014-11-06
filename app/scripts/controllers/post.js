'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the darcheApp
 */
angular.module('darcheApp')
  .controller('PostCtrl', function ($scope, $routeParams, $http, Post) {
  	var posts = Post.query(function(){
  	// I want this to be intercepted!
	console.log('res', posts)
    $scope.post = posts.rows.map(function(row){ return row.doc })
    	.filter(function(post){return post.slug === $routeParams.slug})[0];
  	})
  });