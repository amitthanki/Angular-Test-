using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using System.Text;
using WebApiAngular.Models;

namespace WebApiAngular.Controllers
{
    public class BaseApiController : ApiController
    {
        public ResponseCls _response = new ResponseCls();
        protected HttpResponseMessage ToJson(object obj)
        {
            
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;

        }
    }
}
