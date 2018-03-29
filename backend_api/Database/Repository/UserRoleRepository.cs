using backend_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_api.Repository
{
    public interface UserRoleRepository
    {
        List<Role> getRoleByUserId(int userId);
        User getUserByRoleId(string rolId);
    }
}