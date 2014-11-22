'use strict';

/**
 * @ngdoc project directive
 * @name 
 * @description
 * # darcheApp
 *
 * 
 */

angular
  .module('pdDirectives')
  .directive('pdProject', function(){
    return {
      restrict: 'AEC',
      templateUrl: 'views/partials/project.html',
      link: function(scope, el, attrs){
        el.on('click', '.delete', function(ev){
          ev.preventDefault();
          scope.delete(scope.project);
        });
      }
    }
  });