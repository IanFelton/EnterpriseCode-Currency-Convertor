angular.module('ExchangeRateApp', [])
    .controller('ExchangeRateCtrl', function ($scope, $http) {
        $scope.to = '';
        $scope.from = '';
        $scope.amount = 0.0;
        $scope.exchangeRates = [];

        $scope.result = function () {
            return 0;
        };

        $http.get("/api/exchangerate").success(function (data, status, headers, config) {
            $scope.exchangeRates = data.options;
        }).error(function (data, status, headers, config) {
            $scope.message = "Oops... something went wrong";
        });
    });