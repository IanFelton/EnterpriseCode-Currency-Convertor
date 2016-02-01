using System;
using System.Web.Mvc;

namespace Lighthouse.CurrencyConvertor.Web.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
