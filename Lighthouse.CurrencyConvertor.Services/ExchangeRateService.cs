using Lighthouse.CurrencyConvertor.Data;
using Lighthouse.CurrencyConvertor.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Currency.Services
{
    public class ExchangeRateService : IExchangeRateService
    {
        private readonly IRateRepository rateRepository;

        public ExchangeRateService(IRateRepository rateRepository)
        {
            this.rateRepository = rateRepository;
        }

        void IExchangeRateService.UpdateRates(Feed rates)
        {
            rateRepository.SaveRates(rates);
        }

        Feed IExchangeRateService.GetRates()
        {
            return rateRepository.GetRates();
        }
    }
}