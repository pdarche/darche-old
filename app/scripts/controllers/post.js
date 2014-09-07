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
		{title: 'Starting Over', timestamp: 1410116029045, description:"I'm creating a new personal webisite.  I'm usually plagued by a need to have everything figured out before I try anything.  The development of this site is an exercise in getting away from that.", body: "I'm remaking my personal webite.  As you can see it's quite spartan.  That will change.  Slowly and consistently, I hope", slug: 'starting-over'},
    ];

    $scope.post = posts.filter(function(post){return post.slug === $routeParams.slug})[0];
  });