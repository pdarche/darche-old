'use strict';

/**
 * @ngdoc function
 * @name darcheApp.filters:markdown
 * @description
 * # pdFilters
 * makrdown filter
 */

angular.module('pdFilters', [])
  .filter('markdown', ['md', function(md){
    return function(input){
      if(input) return md.makeHtml(input);
    };
  }]);