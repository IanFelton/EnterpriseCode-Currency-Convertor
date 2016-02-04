using EnterpriseCode.CurrencyConvertor.Model;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Web;

namespace EnterpriseCode.CurrencyConvertor.Data
{
    public class RateRepository : IRateRepository
    {

        Feed IRateRepository.GetRates()
        {
            Assembly assembly = Assembly.GetExecutingAssembly();
            using (StreamReader sr = new StreamReader(assembly.GetManifestResourceStream("EnterpriseCode.CurrencyConvertor.Data.ExchangeRates.json")))
            {
                Feed rates = JsonConvert.DeserializeObject<Feed>(sr.ReadToEnd());
                return rates;
            }

        }

        void IRateRepository.SaveRates(Feed rates)
        {
            JsonSerializer serializer = new JsonSerializer();
            serializer.Converters.Add(new JavaScriptDateTimeConverter());
            serializer.NullValueHandling = NullValueHandling.Ignore;
            Assembly assembly = Assembly.GetExecutingAssembly();

            using (StreamWriter sw = new StreamWriter(assembly.GetManifestResourceStream("EnterpriseCode.CurrencyConvertor.Data.ExchangeRates.json")))
            using (JsonWriter writer = new JsonTextWriter(sw))
            {
                serializer.Serialize(writer, rates);
            }
        }

        void IDisposable.Dispose()
        {
            throw new NotImplementedException();
        }
    }
}