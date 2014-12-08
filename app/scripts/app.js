'use strict';



angular.module('webApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MenuController'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MenuController'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CurriculumVitaeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
