using backend_api.DTO;
using backend_api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend_api.Repository
{
    public interface ClientRepository
    {
        List<Client> getClients();
        List<Client> getClientsByName(String name);
        Client getClientsById(String clientId);
        Client getClientByPolicy(String policyId);
        void createDB(String dbName);
    }
}