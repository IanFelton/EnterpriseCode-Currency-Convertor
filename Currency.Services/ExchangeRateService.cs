using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Currency.Services
{
    public class ExchangeRateService : IExchangeRateService
    {
        void IExchangeRateService.UpdateRates(IEnumerable<Lighthouse.CurrencyConvertor.Model.ExchangeRate> rates)
        {
 	        throw new NotImplementedException();
        }

        IEnumerable<Lighthouse.CurrencyConvertor.Model.ExchangeRate> IExchangeRateService.GetRates()
        {
 	        throw new NotImplementedException();
        }
    }
}