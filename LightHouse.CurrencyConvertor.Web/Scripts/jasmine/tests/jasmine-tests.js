/// <reference path="C:\Users\ian_000\documents\visual studio 2013\Projects\LightHouseCurrencyConvertor\LightHouse.CurrencyConvertor.Web\Scripts\angular.js" />
/// <reference path="C:\Users\ian_000\documents\visual studio 2013\Projects\LightHouseCurrencyConvertor\LightHouse.CurrencyConvertor.Web\Scripts\angular-mocks.js" />
/// <reference path="C:\Users\ian_000\documents\visual studio 2013\Projects\LightHouseCurrencyConvertor\LightHouse.CurrencyConvertor.Web\Scripts\angular-messages.js" />
/// <reference path="C:\Users\ian_000\documents\visual studio 2013\Projects\LightHouseCurrencyConvertor\LightHouse.CurrencyConvertor.Web\Scripts\app\exchange-rate-controller.js" />
/// <reference path="C:\Users\ian_000\documents\visual studio 2013\Projects\LightHouseCurrencyConvertor\LightHouse.CurrencyConvertor.Web\Scripts\app\exchange-rate-service.js" />

describe('ExchangeRateCtrl', function () {

    var $controller;
    var mockService = {
        convert: function (a, b) { return a * b },
        feedDate: function (a, b) { return '1/1/2016' },
        getRates: function() {
        },
        getRatesForCountry: function () { return '' },
        setRate: function () { return '' }
    };

    beforeEach(module('ExchangeRateApp', function($provide){
        $provide.value('exchangeRates', mockService);
    }));

    beforeEach(inject(function (_$controller_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        
    }));

    describe('$scope.convert', function () {
        it('verifies conversion', function () {
            var $scope = {};
            var controller = $controller('ExchangeRateCtrl', { $scope: $scope });
            $scope.amount = '10';
            $scope.rate = 0.5;
            $scope.to = 'USD';
            $scope.convert();
            expect($scope.symbol).toEqual('USD');
            expect($scope.result).toEqual(5);
        });
    });
});