'use strict';

angular.module('githubUsers', []);
angular.module('githubUsers')
  .controller('mainCtrl', function($scope){
  $scope.user = {
    name: 'Ben',
    email: 'benhalverson@me.com',
    address:{street: '123 abc st',
    city: 'Fremont',
    state: 'CA'},
    friends: ['a', 'b', 'c']
  }

});

angular.module('githubUsers').directive('userInfoCard', function(){
  return {
    templateUrl: 'userinfocard.html',
    restrict: 'E'
  }
})
