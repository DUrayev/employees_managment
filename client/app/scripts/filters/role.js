'use strict';

/**
 * @ngdoc filter
 * @name clientApp.filter:role
 * @function
 * @description
 * # role
 * Filter in the clientApp.
 */
angular.module('clientApp').filter('role', function () {
	return function (input) {
		switch (+input) {
		   case 1:
		      return 'Guest';
		   case 2:
		      return 'User';
		   case 3:
		      return 'Premium User';
	      case 4:
		      return 'Moderator';
	      case 5:
		      return 'Admin';
		   default:
	      	  return 'Unknown';
		};
	};
});
