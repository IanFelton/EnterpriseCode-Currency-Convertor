using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace Lighthouse.CurrencyConvertor.Model
{
    public class ExchangeRate
    {
        [JsonProperty("base")]
        public string Base;
        [JsonProperty("rates")]
        public Dictionary<string,string> Rates;
        [JsonProperty("date")]
        public DateTime Date;
    }
}