'use strict';

/**
 * @ngdoc function
 * @name darcheApp.controller:PostPreview
 * @description
 * # PostCtrl
 * Controller of the darcheApp
 */

angular.module('darcheApp')
  .controller('PostPreviewCtrl', ['$scope', '$routeParams', '$http', 'Scopes', function ($scope, $routeParams, $http, Scopes) {
    console.log('THE CURRENT POST IS', Scopes.get('currentPost'))
    $scope.post = Scopes.get('currentPost')
  }]);