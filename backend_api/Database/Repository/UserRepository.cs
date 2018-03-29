using backend_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_api.Repository
{
    public interface UserRepository
    {
       List<User> getUsers();
       User validateUser(string name, string pass);
    }
}