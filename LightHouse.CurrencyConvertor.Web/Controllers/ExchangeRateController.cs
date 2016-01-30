using Currency.Services;
using Lighthouse.CurrencyConvertor.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LightHouseCurrencyConvertor.Controllers
{
    public class ExchangeRateController : ApiController
    {

        private readonly IExchangeRateService exchangeRateService;

        public ExchangeRateController(IExchangeRateService exchangeRateService)
        {
            this.exchangeRateService = exchangeRateService;
        }

        // GET api/values/5
        public dynamic Get()
        {
            return exchangeRateService.GetRates();
        }

        // POST api/values
        public void Post([FromBody]IEnumerable<ExchangeRate> value)
        {
            exchangeRateService.UpdateRates(value);
        }
    }
}
