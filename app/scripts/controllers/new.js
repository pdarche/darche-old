'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller 
 */
angular.module('darcheApp')
  .controller('NewPostCtrl', function ($scope, $routeParams, $http, Post) {
    var postData = {
      title: null,
      description: null,
      body: null,
      publish: false 
    }
    $scope.post = new Post(postData)
    $scope.submit = function() {
      Post.timestamp = new Date().getTime();
      Post.save($scope.post)
    }
  });