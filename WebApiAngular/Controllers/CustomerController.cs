using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using WebApiAngular.Models;

namespace WebApiAngular.Controllers
{
    public class CustomerController : BaseApiController
    {
        protected Database1Entities obj = new Database1Entities();
        [Route("api/customer/post")]
        public HttpResponseMessage Post([FromBody]Customer obj1)
        {
            obj.Customers.Add(obj1);
            return ToJson(obj.SaveChanges());

        }

    }
}
