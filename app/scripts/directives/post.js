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
      templateUrl: 'views/partials/post.html',
      link: function(scope, el, attrs){
        var del = el.find('.delete');
        // this should be removed.  it should be handeled with data binding
        del.on('click', function(ev){
          ev.preventDefault();
          scope.delete(scope.post, function(){
            el.remove();
          });
        });
      }
    }
  });