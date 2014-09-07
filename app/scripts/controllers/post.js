'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the darcheApp
 */
angular.module('darcheApp')
  .controller('PostCtrl', function ($scope, $routeParams) {
	var posts = [
	  {title: 'REally cool Test', timestamp: '2014-09-06 8:00', description:'Some really cool stuff 1', tags: ['one', 'two', 'three'], slug: 'test'},
      {title: 'Such a cool Test1', timestamp: '2014-09-12 8:00', description:'Some really cool stuff 2', tags: ['one', 'two', 'three'], slug: 'test1'},
      {title: 'The most Cool Test2', timestamp: '2014-12-06 8:00', description:'Some really cool stuff 3', tags: ['one', 'two', 'three'], slug: 'test2'},
      {title: 'The fn coolest Test3', timestamp: '2014-03-06 8:00', description:'Some really cool stuff 4', tags: ['one', 'two', 'three'], slug: 'test3'},
      {title: 'Sucha a Test4', timestamp: '2014-09-06 8:00', description:'Some really cool stuff 5', tags: ['one', 'two', 'three'], slug: 'test4'} 
    ];

    $scope.post = posts.filter(function(post){return post.slug === $routeParams.slug})[0];
  });