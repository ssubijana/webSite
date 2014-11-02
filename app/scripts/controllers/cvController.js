'use strict';

angular.module('webApp')
  .controller('CurriculumVitaeController', ['$scope', 'jsonSrv', function ($scope,jsonSrv) {	 
    $scope.header = 'Profile';
    $scope.header = '';
    $scope.loadContent = function(contentName) {
      jsonSrv.getJsonContent(contentName).then(function(response){
        $scope.header = response.header;
        $scope.cvContent = response.data;
      });
    };
  }]);
