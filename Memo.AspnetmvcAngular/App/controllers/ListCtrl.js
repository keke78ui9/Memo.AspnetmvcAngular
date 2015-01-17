'use strict';

memoApp.controller('ListCtrl', function ($scope, $http) {
    $scope.message = "List Controller!";
    init();
    function init(){
        $http.get('/api/memoapi/get')
       .success(function (res) {
           $scope.memos = res;
       });
    };
});