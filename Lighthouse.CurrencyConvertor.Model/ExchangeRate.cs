using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Lighthouse.CurrencyConvertor.Model
{
    public class ExchangeRate
    {
        public string CurrencyFrom;
        public string CurrencyTo;
        public double Rate;
        public DateTime Date;
    }
}