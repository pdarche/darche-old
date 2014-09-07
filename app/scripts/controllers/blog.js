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
      {title: 'Test', subTitle: 'Test Subtitle', postTime: '2014-09-06', body:'Some really cool stuff', tags:['one', 'two', 'three']},
      {title: 'Test', subTitle: 'Test Subtitle', postTime: '2014-09-06', body:'Some really cool stuff', tags:['one', 'two', 'three']},
      {title: 'Test', subTitle: 'Test Subtitle', postTime: '2014-09-06', body:'Some really cool stuff', tags:['one', 'two', 'three']}
    ];

    $scope.stuffs = [
      'first', 'second', 'third'
    ];    
  });