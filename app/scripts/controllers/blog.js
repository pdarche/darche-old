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
      {title: 'Test', timestamp: '2014-09-06', description:'Some really cool stuff', tags: ['one', 'two', 'three'], slug: 'test'},
      {title: 'Test', timestamp: '2014-09-06', description:'Some really cool stuff', tags: ['one', 'two', 'three'], slug: 'test'},
      {title: 'Test', timestamp: '2014-09-06', description:'Some really cool stuff', tags: ['one', 'two', 'three'], slug: 'test'},
      {title: 'Test', timestamp: '2014-09-06', description:'Some really cool stuff', tags: ['one', 'two', 'three'], slug: 'test'},
      {title: 'Test', timestamp: '2014-09-06', description:'Some really cool stuff', tags: ['one', 'two', 'three'], slug: 'test'}
    ];
  });