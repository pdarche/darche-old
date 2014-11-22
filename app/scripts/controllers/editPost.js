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
      var updateTime = new Date().getTime();
      // push update time to updates array
      $scope.post.updates.push(updateTime);
      // add any comments to the comments array
      // $scope.post.comments = scope.post.comments.split(', ')
      Post.update({id: $scope.post._id}, $scope.post, function(data){
        alert("Saved successfully");
      }, function(err){
        alert("Error!");        
      });
    }

    $scope.delete = function(post) {
      if (confirm("Are you sure you want to delete this post?")){
        post.remove({id: post._id, rev: post._rev}, function(success){
          // add successful delete notification
        }, function(err){
          alert('Sorry, something went wrong!');
        });
      }
    }      
  });
