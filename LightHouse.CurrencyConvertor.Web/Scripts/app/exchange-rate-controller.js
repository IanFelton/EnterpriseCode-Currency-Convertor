angular.module('ExchangeRateApp', ['exchange-rate-service'])
    .controller('ExchangeRateCtrl', ['exchangeRates', '$scope', function (exchangeRates, $scope) {

        $scope.success = false;
        $scope.error = false;

        $scope.to = '';
        $scope.from = '';
        $scope.amount = 0.0;
        $scope.result;

        var getData = exchangeRates.getRateData();

        getData.then(
            function (results) {
                $scope.response = results.data.results;
                $scope.success = true;
            },
            function (error) {
                $scope.message = error;
                $scope.error = true;

            });

        $scope.countries = function () {
            $.each($scope.response, function (i, v) {
                if (v.base == $scope.from) {
                    $scope.toCountries = v.rates;
                }
            });
        }

        $scope.setRate = function () {
            $.each($scope.toCountries, function (i, v) {
                if (i == $scope.to) {
                    $scope.rate = v;
                }
            });
        }

        $scope.calculate = function () {
            $scope.result = $scope.amount * $scope.rate;
        }

    }]);