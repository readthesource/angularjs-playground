'use strict';

angular.module('readthesource')
  .directive('greeting', function ($compile) {
    return {
      restrict: 'E',
      scope: true,
      transclude: true,
      template: '<div class="alert" ng-transclude></div>',
      link: function (scope, element, attrs) {
        scope.name = attrs['name'];
        debugger;
        var el = $compile('<h3>Hello, {{name}}!</h3>')(scope);
        element.prepend(el);
      }
    }
  });

