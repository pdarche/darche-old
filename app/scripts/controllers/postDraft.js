'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:DraftPostCtrl
 * @description
 * # DraftPostCtrl
 * Controller of the darcheApp
 */
angular.module('darcheApp')
  .controller('DraftPostCtrl', function ($scope, $http, Post) {
    var posts = Post.query({publish:true}, function(){
      // I want this to be intercepted!
      $scope.posts = posts.rows.map(function(row){ return row.doc })
                      .filter(function(doc){ return doc.publish !== true});
    })
  });