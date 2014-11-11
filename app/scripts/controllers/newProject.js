'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:NewProjectCtrl
 * @description
 * # NewProjectCtrl
 * Controller 
 */
angular.module('darcheApp')
  .controller('NewProjectCtrl', function ($scope, $routeParams, $http, Project) {
    var projectConfig = {
      title: null,
      description: null,
      body: null,
      tags: [],
      updates: [],
      publish: false 
    };
    $scope.project = new Project(projectConfig);
    $scope.submit = function() {
      // if the route is 'new', create the project
      $scope.project.timestamp = new Date().getTime();
      Project.save($scope.project, function(data){
        alert('Saved successfully');
      }, function(err){
        alert('Error!');
      });
    }
  });