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
      {title: 'Starting Over', timestamp: 1410116029045, description:"I'm creating a new personal webisite.  I'm usually plagued by a need to have everything figured out before I try anything.  The development of this site is an exercise in getting away from that.", slug: 'starting-over'},
    ];
  });