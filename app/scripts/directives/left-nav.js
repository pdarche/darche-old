'use strict';

/**
 * @ngdoc left-nav
 * @name
 * @description
 * # darcheApp
 *
 *
 */

angular
  .module('pdDirectives', [])
  .directive('pdNav', function(){
    return {
      templateUrl: 'views/nav.html',
      link: function(scope, el, attrs){
        el.on('click', '#nav_icon', function(ev){
          var menu = $('#nav_bar');

          menu.hasClass('not-shown') ?
            menu.removeClass('not-shown') :
            menu.addClass('not-shown');
        });

        scope.$on('home', function(ev){
          var menu = $('#nav_bar');

          menu.hasClass('not-shown') ?
            null : menu.addClass('not-shown');
        });

        scope.$on('not-home', function(ev){
          var menu = $('#nav_bar');

          menu.hasClass('not-shown') ?
            menu.removeClass('not-shown') : null;
        });
      }
    }
  });