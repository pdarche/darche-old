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
      tags: [],
      updates: [],      
      publish: false 
    };
    $scope.post = new Post(postData);
    $scope.submit = function() {
      $scope.post.timestamp = new Date().getTime();
      Post.save($scope.post, function(data){
        alert('Saved successfully');
      }, function(err){
        alert('Error!');
      });
    }
  });