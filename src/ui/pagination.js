import angular from 'angular';
import template from './pagination.html';

const pagination = angular
  .module('ui.pagination', [])
  .directive('pagination', function() {
    return {
      restrict: 'E',
      replace: true,
      template: template,
      scope: {
        numPages: '=',
        currentPage: '=',
      },
      link: function(scope) {
        scope.$watch('numPages', value => {
          value = Math.ceil(value);
          scope.pages = [];
          for (let i = 1; i <= value; i++) scope.pages.push(i);
          if (scope.currentPage > value) scope.select(value);
        });

        scope.isActive = page => scope.currentPage === page;

        scope.select = page => {
          if (!scope.isActive(page)) {
            scope.currentPage = page;
          }
        };

        scope.next = () => {
          if (!scope.noNext()) scope.select(scope.currentPage + 1);
        };

        scope.noNext = () => scope.currentPage >= scope.numPages;

        scope.previous = () => {
          if (!scope.noPrevious()) scope.select(scope.currentPage - 1);
        };

        scope.noPrevious = () => scope.currentPage <= 1;
      },
    };
  });

export const moduleName = pagination.name;
