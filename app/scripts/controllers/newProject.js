'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:NewProjectCtrl
 * @description
 * # NewProjectCtrl
 * Controller
 */

angular.module('darcheApp')
  .controller('NewProjectCtrl', ['$scope', '$routeParams', '$http', 'Project', function ($scope, $routeParams, $http, Project) {
    var projectConfig = {
      title: null,
      description: null,
      body: null,
      tags: [],
      updates: [],
      publish: false
    };
    $scope.project = new Project(projectConfig);

    Project.save($scope.project, function(data){
      $scope.project._id = data.id;
      $scope.project._rev = data.rev;
      $window.location.href = '/#/projects/edit/' + data.id;
    });

    // $scope.submit = function() {
    //   $scope.project.timestamp = new Date().getTime();
    //   Project.save($scope.project, function(data){
    //     alert('Saved successfully');
    //   }, function(err){
    //     alert('Error!');
    //   });
    // }
  }]);