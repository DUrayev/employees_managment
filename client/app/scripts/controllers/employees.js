'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
	.controller('EmployeesCtrl', function ($scope, $http) {

  		var request = $http.get('/employees');

		// we'll come back to here and fill in more when ready
		request.success(function (data) {
			$scope.employees = data;
		});

		request.error(function (data) {
			$scope.errorMsg = 'Error';
		});
  });
