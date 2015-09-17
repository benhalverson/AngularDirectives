
angular.module('githubUsers', []);


angular.module('githubUsers').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard.html",
    restrict: "E",
    scope: {
      user: '=',
      initialCollapsed: '@collapsed'
    },
    controller: function($scope) {
      $scope.collapsed = false;
      $scope.collapsed = ($scope.initialCollapsed === 'true');
      $scope.knightMe = function(user) {
        user.rank = "knight";
      };
        $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      };

      $scope.removing = false;
      $scope.startRemove = function() {
        $scope.removing = true;
        
      };

      $scope.cancelRemove = function() {
        $scope.removing = false;
        console.log('cancel clicked');
      };

      $scope.removeFriend = function(friends) {
        var index = $scope.user.friends.indexOf(friends);
        if(index > -1){
          $scope.user.friends.splice(index, 1);
        }
      };
    }
  };
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
