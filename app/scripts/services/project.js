'use strict';

/**
 * @ngdoc function
 * @name darcheApp.factory:Post
 * @description
 * # Post Factory
 * Factory for Blog Posts
 */

angular.module('darcheApp')
  .factory('Project', function($resource, $rootScope) {
  return $resource('http://127.0.0.1:5984/project/:id', {id: '@_id'}, {
    update: {
      method: 'PUT',
      withCredentials: true
    },
    query: {
      method: 'GET',
      params: {include_docs: true},
      url: 'http://127.0.0.1:5984/project/_all_docs',
      headers: {'Content-Type':'text/plain'},
      interceptor: {
        response: function(res){
          res.data = res.data.rows.filter(function(row){ return row.doc; });
          return res;
        }
      }
    }
  });
});