angular.module('ExchangeRateApp', ['exchange-rate-service', 'ngMessages'])
    .controller('ExchangeRateCtrl', ['exchangeRates', '$scope', function (exchangeRates, $scope) {

        $scope.success = false;
        $scope.error = false;
        $scope.to;
        $scope.from;
        $scope.amount;
        $scope.result;

        var getData = exchangeRates.getRates();
        getData.then(
            function (results) {
                $scope.response = results.data.results;
                
                $scope.success = true;
            },
            function (error) {
                $scope.message = error;
                $scope.error = true;

            });

        $scope.getToCountries = function () {
            $scope.toCountries = exchangeRates.getRatesForCountry($scope.response, $scope.from);
        }

        $scope.setRate = function () {
            $scope.rate = exchangeRates.setRate($scope.toCountries, $scope.to)
        }

        $scope.convert = function () {
            $scope.result = exchangeRates.convert($scope.amount, $scope.rate);
            $scope.date = exchangeRates.feedDate($scope.response, $scope.from);
            $scope.symbol = $scope.to;
        }
    }]);