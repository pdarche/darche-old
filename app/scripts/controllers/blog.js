'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the darcheApp
 */
angular.module('darcheApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.posts = [
      {title: 'Starting Over', timestamp: 1409961600000, description:'Some really cool stuff 1', tags: ['one', 'two', 'three'], slug: 'test'},
    ];
  });