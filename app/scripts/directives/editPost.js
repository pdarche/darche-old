'use strict';

/**
 * @ngdoc edit post directive
 * @name
 * @description
 * # darcheApp
 *
 */

angular
  .module('pdDirectives')
  .directive('pdEditPost', ['$window', 'Post', function ($window, Post){
    return {
      restrict: 'AEC',
      templateUrl: 'views/partials/editPost.html',
      link: function(scope, el, attrs){
        el.on('click', '#preview', function(ev){
          ev.preventDefault();

          Post.update({id: scope.post._id}, scope.post, function(data){
              scope.post._rev = data.rev;
              $window.location.href = '/#/blog/' + scope.post._id
            }, function(err){
            alert("Error!");
          });
        });
      }
    }
  }]);