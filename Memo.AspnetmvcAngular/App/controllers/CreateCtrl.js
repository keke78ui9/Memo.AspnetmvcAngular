'use strict';
memoApp.controller('CreateCtrl', function ($scope, $http) {
    $scope.message = "Create Controller!";
    $scope.submit = function () {
        $http.post('/api/memoapi/create',
            {
                MemoText: 'test'
            })
        .success(function () {
            console.info("su");
        }).
        error(function () {
            console.info("ss");
        });
    };
});