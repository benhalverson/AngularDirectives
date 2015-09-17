
angular.module('githubUsers', []);


angular.module('githubUsers').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {
      user: '='
    },
    controller: function($scope) {
      $scope.collapsed = false;
      $scope.knightMe = function(user) {
        user.rank = "knight";
      }
      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      }
  console.log('Directive Userinfo Scope ', $scope.user);
    }

  }
});

angular.module('githubUsers').directive('address', function() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'address.html',
    controller: function($scope) {
      $scope.collapsed = false;
      $scope.collapseAddress = function() {
        $scope.collapsed = true;
      }
      $scope.expandAddress = function() {
        $scope.collapsed = false;
      }
console.log('Address Scope ', $scope.user.address);
    }

  }
})
