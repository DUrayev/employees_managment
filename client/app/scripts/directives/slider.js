'use strict';

/**
 * @ngdoc directive
 * @name clientApp.directive:slider
 * @description
 * # slider
 */
angular.module('clientApp').directive('slider', function () {
    return {
    	scope: {
    		accessLevel: '=ngModel'
    	},
		restrict: 'A',
		link: function addSliderComponent(scope, element, attrs) {
			element.slider({
			    value: scope.accessLevel,
			    min: parseInt(attrs.min || 1),
			    max: parseInt(attrs.max || 100),
			    step: parseFloat(attrs.step || 1),
			    slide: function(event, ui) {
			        scope.$apply(function() {
			            scope.accessLevel = ui.value;
			        });
			    }
			});
			scope.$watch('accessLevel', function (value) {
	            element.slider('value', value);
	        }, true);
		}
	};
  });
