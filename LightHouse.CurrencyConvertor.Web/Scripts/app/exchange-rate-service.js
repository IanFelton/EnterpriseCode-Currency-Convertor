angular.module('exchange-rate-service', [])
    .service('exchangeRates', ['$http', '$q', function ($http, $q) {
        var deferObject,
        getRateData = {
            
            getRateData: function () {
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
            }
        };

        return  getRateData;
    }]);