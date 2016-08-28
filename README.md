# Employees Managment
Test application to demonstrate ExpressJS and AngularJS frameworks

##Run
In the **server** folder command line
```
SET NODE_ENV=development
```
```
nodemon ./bin/www
```

----------
**Yeoman** scaffolding tool was used:
- generator-angular
- generator-express


**AngularJS** features:
- **filter** to determine employee's role
- **directives** to wrap jQuery UI slider component
- **$http**

----------
##Filter (access level -> role)
![](https://pp.vk.me/c630627/v630627221/4d134/ru8sU43yk0w.jpg)

filter
```
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
```
view
```
{{employee.accessLevel | role}}
```

----------

##Filter (access level -> role) + Directive (JQuery UI slider)
![](https://pp.vk.me/c630627/v630627221/4d13d/pyCSc8GjPec.jpg)

directive
```
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
```
controller
```
angular.module('clientApp').controller('EmployeeCtrl', function ($scope, $http, $routeParams) {

	var request = $http.get('/employee/' + $routeParams.id);

	request.success(function (data) {
		$scope.employee = data;
	});
});	
```
view
```
<div slider min="1" max="5" ng-model="employee.accessLevel"/>
```
json
```
{
	"id": "1",
	"photoUrl": "1.jpg",
	"firstName": "Nick",
	"lastName": "Adams",
	"accessLevel": "1"
}
```
