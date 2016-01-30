using Lighthouse.CurrencyConvertor.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Web;

namespace Lighthouse.CurrencyConvertor.Data
{
    public class RateRepository : IRateRepository
    {

        dynamic IRateRepository.GetRates()
        {
            Assembly assembly = Assembly.GetExecutingAssembly();
            using (StreamReader sr = new StreamReader(assembly.GetManifestResourceStream("Lighthouse.CurrencyConvertor.Data.ExchangeRates.json")))
            {
                dynamic rates = JsonConvert.DeserializeObject<dynamic>(sr.ReadToEnd());
                return rates;
            }
            
        }

        void IRateRepository.SaveRates(IEnumerable<Model.ExchangeRate> rates)
        {
            throw new NotImplementedException();
        }

        void IDisposable.Dispose()
        {
            throw new NotImplementedException();
        }
    }
}