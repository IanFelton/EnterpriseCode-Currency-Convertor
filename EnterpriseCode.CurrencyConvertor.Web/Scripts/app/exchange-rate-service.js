angular.module('ExchangeRateService', [])
    .service('exchangeRates', ['$http', '$q', function ($http, $q) {
        var deferObject,
        getRateData = {
            getRates: function () {
                var promise = $http.get("/api/exchangerate"),
                    deferObject = deferObject || $q.defer();

                promise.then(
                    function (result) {
                        deferObject.resolve(result);
                    },
                    function (error) {
                        deferObject.reject(error);
                    });
                return deferObject.promise;
            },
            getRatesForCountry: function (countries, country) {
                var rates;
                $.each(countries, function (i, v) {
                    if (v.base == country) {
                        rates = v.rates;
                    }
                });

                return rates;
            },
            setRate: function (rates, country) {
                var rate;
                $.each(rates, function (i, v) {
                    if (i == country) {
                        rate = v;
                    }
                });
                return rate;
            },
            convert : function (amount, rate) {
                return amount * rate;
            },
            feedDate: function (countries, country) {
                var date;
                $.each(countries, function (i, v) {
                    if (v.base == country) {
                        date = v.date;
                    }
                });
                return date;
            }
        };

        return  getRateData;
    }]);