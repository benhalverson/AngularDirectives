'use strict';

angular.module('githubUsers', []);


angular.module('githubUsers').directive('userInfoCard', function(){
  return {
    templateUrl: 'userinfocard.html',
    restrict: 'E',
    controller: function($scope) {
      $scope.knightMe = function(user) {
        user.rank = "Knighted";
      };
    }
  };
});
