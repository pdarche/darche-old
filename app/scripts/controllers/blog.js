'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the darcheApp
 */
angular.module('darcheApp')
  .controller('BlogCtrl', function ($scope, $http, Post) {
    var posts = Post.query(function(){
      // I want this to be intercepted!
      $scope.posts = posts.rows.map(function(row){ return row.doc });
    })
  });