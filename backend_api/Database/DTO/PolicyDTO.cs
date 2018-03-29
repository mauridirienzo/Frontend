using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_api.DTO
{
    public class PolicyDTO
    {
            public String id { get; set; }
            public Double amountInsured { get; set; }
            public String email { get; set; }
            public String inceptionDate { get; set; }
            public Boolean installmentPayment { get; set; }
        }
}