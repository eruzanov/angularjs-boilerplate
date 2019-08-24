import angular from 'angular';
import { moduleName as gretting } from './gretting';
import { moduleName as ui } from './ui';
import { moduleName as users } from './users';
import 'bootstrap/dist/css/bootstrap.min.css';

angular.module('app', [gretting, ui, users]).controller('listUsers', [
  '$scope',
  'users',
  function($scope, users) {
    $scope.users = [];
    $scope.limit = 10;
    $scope.currentPage = 1;
    $scope.selectPage = page => ($scope.currentPage = page);

    users.get(100).then(users => {
      $scope.users = users;
      $scope.selectPage(1);
    });
  },
]);
