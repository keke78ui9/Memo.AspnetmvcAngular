var memoApp = angular.module('memo', ['ngMaterial', 'ngMessages', 'ngRoute']);
memoApp.config(function ($routeProvider) {
    $routeProvider.
      when('/', {
          templateUrl: 'app/views/CreateMemo.html',
          controller: 'CreateCtrl'
      }).
      when('/ListMemo', {
          templateUrl: 'app/views/ListMemo.html',
          controller: 'ListCtrl'
      }).
      otherwise({
          redirectTo: '/'
      });
});


memoApp.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = function () {
        $mdSidenav('left').toggle();
    };
    $scope.toggleRight = function () {
        $mdSidenav('right').toggle();
    };
});
memoApp.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('left').close();
    };
});
memoApp.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
        $mdSidenav('right').close();
    };
});

