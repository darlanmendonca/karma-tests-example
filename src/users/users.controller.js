'use strict';

angular
	.module('exampleModule')
	.controller('UsersController', UsersController);

function UsersController($scope, UsersService) {
	$scope.variableA = UsersService.variableA;
	$scope.name = 'a example name';
}