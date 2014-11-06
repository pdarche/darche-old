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
    $http.get('http://127.0.0.1:5984/darche/_all_docs?include_docs=true').
	  success(function(data, status, headers, config) {
	    // this callback will be called asynchronously
	    // when the response is available
	    $scope.posts = data.rows.map(function(obj){ return obj.doc})
	  });
  });