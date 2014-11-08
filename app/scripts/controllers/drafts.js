'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the darcheApp
 */
angular.module('darcheApp')
  .controller('DraftCtrl', function ($scope, $http, Post) {
    var posts = Post.query({publish:true}, function(){
      // I want this to be intercepted!
      $scope.posts = posts.rows.map(function(row){ return row.doc; })
                        .filter(function(doc){ return doc.publish !== true; });
    });
  });