'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the darcheApp
 */
angular.module('darcheApp')
  .controller('BlogCtrl', function ($scope, $http, Post) {
    var projects = Project.query({publish:true}, function(){
      // I want this to be intercepted!
      $scope.projects = projects.rows.map(function(row){ return row.doc; })
                        .filter(function(doc){ return doc.publish === true; });
    })
  });