using Lighthouse.CurrencyConvertor.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Currency.Services
{
    public class ExchangeRateService : IExchangeRateService
    {
        void IExchangeRateService.UpdateRates(IEnumerable<ExchangeRate> rates)
        {
 	        throw new NotImplementedException();
        }

        IEnumerable<ExchangeRate> IExchangeRateService.GetRates()
        {
 	        var rates = new List<ExchangeRate>();
            var rate1 = new ExchangeRate { CurrencyFrom = "USD", CurrencyTo = "EUR", Rate = 0.921, Date = DateTime.Now };
            var rate2 = new ExchangeRate { CurrencyFrom = "USD", CurrencyTo = "AUD", Rate = 1.41137, Date = DateTime.Now };
            var rate3 = new ExchangeRate { CurrencyFrom = "CNY", CurrencyTo = "EUR", Rate = 0.140380, Date = DateTime.Now };
            var rate4 = new ExchangeRate { CurrencyFrom = "CNY", CurrencyTo = "USD", Rate = 0.152045, Date = DateTime.Now };
            rates.Add(rate1);
            rates.Add(rate2);
            rates.Add(rate3);
            rates.Add(rate4);
            return rates;
        }
    }
}