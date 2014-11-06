'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller 
 */
angular.module('darcheApp')
  .controller('EditCtrl', function ($scope, $routeParams, $http) {
	$http.get('http://127.0.0.1:5984/darche/_all_docs?include_docs=true').
	  success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
	    var posts = data.rows.map(function(obj){ return obj.doc})
	    $scope.post = posts.filter(function(post){
	    	return post.slug === $routeParams.slug})[0];
	  });
  });
