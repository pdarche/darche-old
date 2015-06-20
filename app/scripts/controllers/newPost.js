'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller
 */

angular.module('darcheApp')
  .controller('NewPostCtrl', ['$scope', '$routeParams', '$http', '$window', 'Post', 'Scopes', function ($scope, $routeParams, $http, $window, Post, Scopes) {
    var postConfig = {
      title: null,
      description: null,
      body: null,
      tags: [],
      updates: [],
      publish: false
    };
    $scope.post = new Post(postConfig);

    Post.save($scope.post, function(data){
      $scope.post._id = data.id;
      $scope.post._rev = data.rev;
      $window.location.href = '/#/blog/edit/' + data.id;
    });

    // $scope.post = new Post(postConfig);

    // $scope.submit = function() {
    //   $scope.post.timestamp = new Date().getTime();
    //   Post.save($scope.post, function(data){
    //     alert('Saved successfully');
    //   }, function(err){
    //     alert('Error!');
    //   });
    // }
  }]);