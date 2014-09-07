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
      {title: 'REally cool Test', timestamp: 1409961600000, description:'Some really cool stuff 1', tags: ['one', 'two', 'three'], slug: 'test'},
      {title: 'Such a cool Test1', timestamp: 1409961600000, description:'Some really cool stuff 2', tags: ['one', 'two', 'three'], slug: 'test1'},
      {title: 'The most Cool Test2', timestamp: 1409961600000, description:'Some really cool stuff 3', tags: ['one', 'two', 'three'], slug: 'test2'},
      {title: 'The fn coolest Test3', timestamp: 1409961600000, description:'Some really cool stuff 4', tags: ['one', 'two', 'three'], slug: 'test3'},
      {title: 'Sucha a Test4', timestamp: 1409961600000, description:'Some really cool stuff 5', tags: ['one', 'two', 'three'], slug: 'test4'} 
    ];
  });