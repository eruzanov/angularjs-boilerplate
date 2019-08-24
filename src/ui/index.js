import angular from 'angular';
import { moduleName as button } from './button';
import { moduleName as pagination } from './pagination';

const ui = angular.module('ui', [button, pagination]);

export const moduleName = ui.name;
