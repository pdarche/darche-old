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
        var del = el.find('.delete')
        
        del.on('click', function(ev){
          ev.preventDefault()
          scope.delete(scope.project, function(){
            el.remove()
          })
        })
      }
    }
  });