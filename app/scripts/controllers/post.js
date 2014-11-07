'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the darcheApp
 */

angular.module('darcheApp')
  .controller('PostCtrl', function ($scope, $routeParams, $http, Post) {
    $scope.post = Post.get({id: $routeParams.id});
  });