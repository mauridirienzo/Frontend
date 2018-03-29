using backend_api.DTO;
using backend_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_api.Repository
{
    public interface PolicyRepository
    {
        List<Policy> getPolicyByClientName(String name);
    }
}