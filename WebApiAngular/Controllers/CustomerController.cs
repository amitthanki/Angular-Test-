using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApiAngular.Models;


namespace WebApiAngular.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CustomerController : BaseApiController
    {
        protected Database1Entities2 obj = new Database1Entities2();
        public ResponseCls _response = new ResponseCls();
        [Route("api/customer/post")]
        [HttpPost]
        public HttpResponseMessage Post([FromBody]Customer obj1)
        {
            //Customer item = JsonConvert.DeserializeObject<Customer>(jsonResult.ToString());

            obj.Customers.Add(obj1);
            obj.SaveChanges();
            return ToJson(1);


        }
        [HttpGet]
        public HttpResponseMessage GetCustomer()
        {
            return ToJson(obj.Customers.AsEnumerable());
        }

        [HttpGet]
        [Route("api/GetCustomerID/{id}")]
        public HttpResponseMessage GetCustomerByID(int id)
        {
            
            return ToJson(obj.Customers.Where(x=>x.Id == id).FirstOrDefault());
        }
        [HttpGet]
        [Route("api/GetLookupValue")]
        public HttpResponseMessage GetLookupValue()
        {
            return ToJson(obj.Tables.ToList());
           // return ToJson(obj.Tables.Where(x => x.LookupType == id).GroupBy(x => x.LookupType).ToList());
        }
    }
}
