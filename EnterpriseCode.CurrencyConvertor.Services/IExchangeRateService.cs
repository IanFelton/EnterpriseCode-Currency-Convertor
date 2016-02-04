using EnterpriseCode.CurrencyConvertor.Model;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnterpriseCode.CurrencyConvertor.Services
{
    public interface IExchangeRateService
    {
        void UpdateRates(Feed rates);
        Feed GetRates();
    }
}
