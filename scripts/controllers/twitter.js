// Generated by CoffeeScript 1.3.3
/*global define
*/

define(['controllers/controllers', 'services/twitter'], function(controllers) {
  'use strict';
  return controllers.controller('twitter', [
    '$scope', '$rootScope', '$location', 'twitter', function($scope, $rootScope, $location, service) {
      $scope.searchTerm = '';
      $scope.tweets = service.tweets;
      $scope.search = function(searchTerm) {
        return $location.path("/twitter/" + searchTerm);
      };
      return $rootScope.$on('twitter$routeChangeSuccess', function(event, currentRoute, priorRoute) {
        $scope.searchTerm = currentRoute.params.searchTerm;
        service.get($scope.searchTerm);
        return $scope.$broadcast('changeTab#twitter');
      });
    }
  ]);
});
