angular.module('ExchangeRateApp', [])
    .controller('ExchangeRateCtrl', function ($scope, $http) {
        $scope.to = '';
        $scope.from = '';
        $scope.amount = 0.0;
        $scope.response;
        $scope.result = function () {
            return 0;
        };

        $http.get("/api/exchangerate").success(function (data, status, headers, config) {
            $scope.response = data.results;
        }).error(function (data, status, headers, config) {
            $scope.message = "Oops... something went wrong";
        });
    });