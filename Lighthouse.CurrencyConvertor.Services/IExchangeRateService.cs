using Lighthouse.CurrencyConvertor.Model;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Currency.Services
{
    public interface IExchangeRateService
    {
        void UpdateRates(IEnumerable<ExchangeRate> rates);
        IEnumerable<ExchangeRate> GetRates();
    }
}
