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
  .directive('pdLeftNav', function(){
    return {  
      templateUrl: 'views/nav.html',
      link: function(scope, el, attrs){
        el.on('click', 'img', function(){
          var menu = $('#nav_menu');
          
          menu.hasClass('hidden') ? 
            menu.removeClass('hidden') : 
            menu.addClass('hidden');
        });
      }
    }
  });