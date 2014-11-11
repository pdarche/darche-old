'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:EditProjectCtrl
 * @description
 * # EditProjectCtrl
 * Controller 
 */
angular.module('darcheApp')
  .controller('EditProjectCtrl', function ($scope, $routeParams, $http, Project) {
    $scope.project = Project.get({id: $routeParams.id});
    $scope.submit = function() {
      var updateTime = new Date().getTime();
      // push update time to updates array
      $scope.project.updates.push(updateTime)
      // add any comments to the comments array
      // $scope.project.comments = scope.project.comments.split(', ')
      Project.update({id: $scope.post._id}, $scope.project, function(data){
        alert("Saved successfully");
      }, function(err){
        alert("Error!");
      });
    }
  });
