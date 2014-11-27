'use strict';

/**
 * @ngdoc function
 * @name darcheApp.factory:Post
 * @description
 * # Post Factory
 * Factory for Blog Posts
 */

angular.module('darcheApp')
  .factory('Post', ['$resource', function ($resource) {
    return $resource('http://peterdarche.com:5984/posts/:id', {id: '@_id'}, {
      save: {
        method: 'POST',
        withCredentials: true
      },
      update: {
        method: 'PUT',
        withCredentials: true
      },
      query: {
        method: 'GET',
        params: {include_docs: true},
        url: 'http://peterdarche.com:5984/posts/_all_docs',
        headers: {'Content-Type':'text/plain'},
        interceptor: {
          response: function(res){
            res.data = res.data.rows.filter(function(row){ return row.doc; });
            return res;
          }
        }
      },
      remove: {
        method: 'DELETE',
        withCredentials: true
      }    
    });
  }]);