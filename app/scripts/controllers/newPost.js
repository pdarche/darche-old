'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller
 */
angular.module('darcheApp')
  .controller('NewPostCtrl', ['$scope', '$routeParams', '$http', 'Post', function ($scope, $routeParams, $http, Post) {
    var postConfig = {
      title: null,
      description: null,
      body: null,
      tags: [],
      updates: [],
      publish: false
    };
    $scope.post = new Post(postConfig);
    $scope.submit = function() {
      $scope.post.timestamp = new Date().getTime();
      Post.save($scope.post, function(data){
        alert('Saved successfully');
      }, function(err){
        alert('Error!');
      });
    }
  }]);