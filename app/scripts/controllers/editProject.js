'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:EditProjectCtrl
 * @description
 * # EditProjectCtrl
 * Controller
 */
 
angular.module('darcheApp')
  .controller('EditProjectCtrl', ['$scope', '$routeParams', '$http', 'Project', function ($scope, $routeParams, $http, Project) {
    $scope.project = Project.get({id: $routeParams.id});
    
    $scope.submit = function() {
      var updateTime = new Date().getTime();
      // push update time to updates array
      $scope.project.updates.push(updateTime)
      // add any comments to the comments array
      // $scope.project.comments = scope.project.comments.split(', ')
      Project.update({id: $scope.project._id}, $scope.project, function(data){
        alert("Saved successfully");
      }, function(err){
        alert("Error!");
      });
    }

    $scope.delete = function(project) {
      if (confirm("Are you sure you want to delete this project?")){
        Project.remove({id: project._id, rev: project._rev}, function(success){
        // add successful delete notification
        }, function(err){
          alert('Sorry, something went wrong!');
        });
      }
    }    
  }]);
