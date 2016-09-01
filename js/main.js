
var app = angular.module('angularjs-starter', []);

 app.config(function($routeProvider) {
   $routeProvider.when('/test', {
     controller: 'TestCtrl',
     templateUrl: 'home.html'
   })
   .when('/weee', {
     controller: 'WeeeCtrl',
     templateUrl: 'home.html'
   });
 });

 app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
   $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
     $location.hash($routeParams.scrollTo);
     $anchorScroll();
   });
 })

 app.controller('MainCtrl', function($scope, $location, $anchorScroll, $routeParams) {
 });


 app.controller('TestCtrl', function($scope) {
 });


 app.controller('WeeeCtrl', function($scope) {
 });
