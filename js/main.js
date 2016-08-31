/*Main AngularJS Web Application*/

var app = angular.module('mywebapp', ['ngRoute']);

/*Configure the Routes*/
app.config(function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "partials/home.html",
			controller: "homeController"
		})
		.when('/about', {
			templateUrl: 'partials/about.html',
			controller: 'aboutController'
		})
		.when('/project', {
			templateUrl: 'partials/projects.html',
			controller: "projectsController"
		})
		.when('/contact', {
			templateUrl: 'partials/contact.html',
			controller: 'contactController'
		});
});
app.controller('homeController', function($scope) {
	$scope.name = "home";
});
app.controller('aboutController', function($scope) {
	$scope.name = "about";
});
app.controller('projectsController', function($scope) {
	$scope.name = "projects";
});
app.controller('contactController', function($scope) {
	$scope.name = "contact";
});

var crud = angular.module('crud', ['ngResource']);
