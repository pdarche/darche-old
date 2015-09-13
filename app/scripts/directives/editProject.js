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
  .directive('pdEditProject', ['$window', 'Project', function ($window, Project){
    return {
      restrict: 'AEC',
      templateUrl: 'views/partials/editProject.html',
      link: function(scope, el, attrs){
        el.on('click', '#preview', function(ev){
          ev.preventDefault();

          Project.update({id: scope.project._id}, scope.project, function(data) {
              scope.project._rev = data.rev;
              $window.location.href = '/#/projects/' + scope.project._id;
            }, function(err) {
              alert("Error!");
          });
        });
      }
    }
  }]);