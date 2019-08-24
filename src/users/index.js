import angular from 'angular';

export const moduleName = angular.module('users', []).service('users', [
  '$http',
  function($http) {
    return {
      get(count = 50) {
        return $http
          .get(`https://randomuser.me/api/?results=${count}`)
          .then(resp => resp.data.results);
      },
    };
  },
]).name;
