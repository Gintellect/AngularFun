// Generated by CoffeeScript 1.3.3
/*global define
*/

define(['directives/directives', 'libs/text!partials/tab.html', 'directives/tabs'], function(directives, template) {
  'use strict';
  return directives.directive('tab', [
    function() {
      var link;
      link = function(scope, element, attrs, controller) {
        return controller.addTab(scope, attrs.tabId);
      };
      return {
        link: link,
        replace: true,
        require: '^tabs',
        restrict: 'E',
        scope: {
          caption: '@'
        },
        template: template,
        transclude: true
      };
    }
  ]);
});
