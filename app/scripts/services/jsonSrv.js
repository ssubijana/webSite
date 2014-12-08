'use strict';

//Server for retrieving CV information
(function () {
  angular.module('webApp').factory('jsonSrv',['$http', '$q', function ($http, $q) {
    var baseUrl = $("base").first().attr("href");

    function getCv(){
      return $http.get('./../json/cv.json');
    }
    function getJsonContent(jsonName) {
      var deferred = $q.defer();
      $http.get(baseUrl + 'json/' + jsonName + '.json').success(function(response){
        return deferred.resolve(response);
      });
      return deferred.promise;
    }
    return {
      //Public functions
      getCv: getCv,
      getJsonContent: getJsonContent
    };
  }]);
}());