'use strict';

/**
 * @ngdoc post directive
 * @name 
 * @description
 * # darcheApp
 *
 * 
 */

angular
  .module('pdDirectives')
  .directive('pdPost', function(){
    return {
      restrict: 'AEC',
      templateUrl: 'views/post.html',
      link: function(scope, el, attrs){
        var del = el.find('.delete')

        del.on('click', function(ev){
          ev.preventDefault()
          scope.delete(scope.post, function(){
            el.remove()
          })
        })
      }
    }
  });