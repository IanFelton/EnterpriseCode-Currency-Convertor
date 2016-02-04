/// <reference path="C:\Users\ian_000\documents\visual studio 2013\Projects\EnterpriseCodeCurrencyConvertor\EnterpriseCode.CurrencyConvertor.Web\Scripts\angular.js" />
/// <reference path="C:\Users\ian_000\documents\visual studio 2013\Projects\EnterpriseCodeCurrencyConvertor\EnterpriseCode.CurrencyConvertor.Web\Scripts\angular-mocks.js" />
/// <reference path="C:\Users\ian_000\documents\visual studio 2013\Projects\EnterpriseCodeCurrencyConvertor\EnterpriseCode.CurrencyConvertor.Web\Scripts\angular-messages.js" />
/// <reference path="C:\Users\ian_000\documents\visual studio 2013\Projects\EnterpriseCodeCurrencyConvertor\EnterpriseCode.CurrencyConvertor.Web\Scripts\app\exchange-rate-controller.js" />
/// <reference path="C:\Users\ian_000\documents\visual studio 2013\Projects\EnterpriseCodeCurrencyConvertor\EnterpriseCode.CurrencyConvertor.Web\Scripts\app\exchange-rate-service.js" />

describe('ExchangeRateCtrl', function () {
    var $scope;
    var $q;
    var deferred;

    beforeEach(module('ExchangeRateApp'));
    
    beforeEach(inject(function ($controller, _$rootScope_, _$q_, exchangeRates) {
        $q = _$q_;
        $scope = _$rootScope_.$new();

        exchangeRates.convert = function (a, b) { return a * b };
        exchangeRates.feedDate = function (a, b) { return '1/1/2016' };
        exchangeRates.getRatesForCountry = function () { return '' };
        exchangeRates.setRate = function () { return '' };

        // We use the $q service to create a mock instance of defer
        deferred = _$q_.defer();

        // Use a Jasmine Spy to return the deferred promise
        spyOn(exchangeRates, 'getRates').and.returnValue(deferred.promise);

        // Init the controller, passing our spy service instance
        $controller('ExchangeRateCtrl', {
            $scope: $scope,
            exchangeRates: exchangeRates
        });
    }));

    it('should resolve promise', function () {
        // Setup the data we wish to return for the .then function in the controller
        var results = { data: { results: 1 } };
        deferred.resolve(results);
        // We have to call apply for this to work
        $scope.$apply();

        // Since we called apply, not we can perform our assertions
        expect($scope.response).not.toBe(undefined);
        expect($scope.error).toBe(false);
        expect($scope.success).toBe(true);
    });

    it('should reject promise', function () {
        // This will call the .catch function in the controller
        deferred.reject();

        // We have to call apply for this to work
        $scope.$apply();

        // Since we called apply, not we can perform our assertions
        expect($scope.results).toBe(undefined);
        expect($scope.error).toBe(true);
        expect($scope.success).toBe(false);
    });

    it('verifies conversion', function () {
        var results = { data: { results: 1 } };
            // Setup the data we wish to return for the .then function in the controller
            deferred.resolve(results);

            // We have to call apply for this to work
            $scope.$apply();

            $scope.amount = '10';
            $scope.rate = 0.5;
            $scope.to = 'USD';
            $scope.convert();
            expect($scope.symbol).toEqual('USD');
            expect($scope.result).toEqual(5);
        });

});