import angular from 'angular';
import template from './index.html';
import '../styles.css';

export const moduleName = angular
  .module('gretting', [])
  .component('gretting', {
    template,
    controller: $scope => ($scope.gretting = 'Hello AngularJS'),
  }).name;
