'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
	.controller('EmployeeCtrl', function ($scope, $http, $routeParams) {

  		var request = $http.get('/employee/' + $routeParams.id);

		// we'll come back to here and fill in more when ready
		request.success(function (data) {
			$scope.employee = data;
		});
  });
