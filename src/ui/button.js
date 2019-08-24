import angular from 'angular';

const button = angular.module('ui.button', []).directive('button', function() {
  return {
    restrict: 'E',
    compile: function(el, attrs) {
      el.addClass('btn btn-primary');
      if (attrs.size && ['lg', 'sm'].includes(attrs.size)) {
        el.addClass(`btn-${attrs.size}`);
      }
    },
  };
});

export const moduleName = button.name;
