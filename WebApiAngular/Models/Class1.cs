using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiAngular.Models
{
    [JsonObject(Title ="customer")]
    public class Class1
    {
        public string Name { get; set; }

        public string Email { get; set; }

        public string Street { get; set; }

        public string City { get; set; }

        public string PostalCode { get; set; }
        [JsonProperty(PropertyName="sdsd")]
        public string Country { get; set; }

    }
}