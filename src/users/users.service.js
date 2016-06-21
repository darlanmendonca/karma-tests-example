'use strict';

angular
	.module('exampleModule')
	.service('UsersService', UsersService);

function UsersService() {
	this.variableA = 'a';
}