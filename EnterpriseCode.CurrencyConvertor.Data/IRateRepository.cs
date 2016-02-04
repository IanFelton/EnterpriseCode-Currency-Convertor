using EnterpriseCode.CurrencyConvertor.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EnterpriseCode.CurrencyConvertor.Data
{
    public interface IRateRepository : IDisposable
    {
        Feed GetRates();
        void SaveRates(Feed rates);
    }
}
