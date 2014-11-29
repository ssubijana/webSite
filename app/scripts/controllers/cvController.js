'use strict';

angular.module('webApp')
  .controller('CurriculumVitaeController', ['$scope','jsonSrv', function ($scope,jsonSrv) {	 
    var loadJsonData = function(contentName) {
      jsonSrv.getJsonContent(contentName).then(function(response){
        $scope.header = response.header;
        $scope.cvContent = response.data;
      });
    }

    $scope.loadContent = function(contentName) {
      loadJsonData(contentName);
    };

    $scope.header = 'Profile';
    $scope.header = '';
    loadJsonData('profile')


  }]);
