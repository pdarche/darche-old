'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:EditCtrl
 * @description
 * # EditPostCtrl
 * Controller 
 */
angular.module('darcheApp')
  .controller('EditPostCtrl', function ($scope, $routeParams, $http, Post) {
    $scope.post = Post.get({id: $routeParams.id});
    $scope.submit = function() {
      $scope.post.timestamp = new Date().getTime();
      Post.update({id: $scope.post._id}, $scope.post, function(data){
        alert("Saved successfully");
      }, function(err){
        alert("Error!");
      });
    }
  });
