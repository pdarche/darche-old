'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the darcheApp
 */

angular.module('darcheApp')
  .controller('ProjectCtrl', function ($scope, $routeParams, $http, Project) {
    $scope.project = Project.get({id: $routeParams.id});
    console.log($scope.project)
  });