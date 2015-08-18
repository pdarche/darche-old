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
        var video = el.find('video').first();
        var source = el.find('video source').first();

        video.attr('poster', scope.project.imgUrl);
        source.attr('src', scope.project.gfycat);

        el.on('mouseover', '.project-partial-image', function(ev){
          ev.target.play();
        });

        el.on('mouseout', '.project-partial-image', function(ev){
          ev.target.pause();
        });

        el.on('click', '.delete', function(ev){
          ev.preventDefault();
          scope.delete(scope.project);
        });
      }
    }
  });