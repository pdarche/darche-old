'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the darcheApp
 */
angular.module('darcheApp')
  .controller('ProjectsCtrl', function ($scope, $http, Project) {
    var projects = Project.query({publish:true}, function(){
      // I want this to be intercepted!
      console.log('the projects are', projects)
      $scope.projects = projects.rows.map(function(row){ return row.doc; })
                          .filter(function(doc){ return doc.publish === true; });
    })
  });