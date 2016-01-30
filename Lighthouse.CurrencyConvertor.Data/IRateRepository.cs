using Lighthouse.CurrencyConvertor.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lighthouse.CurrencyConvertor.Data
{
    public interface IRateRepository : IDisposable
    {
        dynamic GetRates();
        void SaveRates(IEnumerable<ExchangeRate> rates);
    }
}
