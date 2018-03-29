using AutoMapper;
using backend_api.Repository;
using backend_api.DTO;
using backend_api.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace backend_api.Controllers
{
    [EnableCors(origins: "http://localhost", headers: "*", methods: "*")]

    /*
    The main Controler
    Contains all API methods*/

    [Authorize]
    public class MainController : ApiController
    {
        private readonly ClientRepository _client;
        private readonly PolicyRepository _policy;

        public MainController(ClientRepository client, PolicyRepository policy)
        {
            _client = client;
            _policy = policy;
        }
        /// <summary>
        /// Gets all clients from db
        /// </summary>
        /// <returns>Returns a list of clients or null if empty</returns>
        [HttpGet]
        [Route("api/clients")]
        public List<ClientDTO> getClients()
        {
            return Mapper.Map<List<Client>, List<ClientDTO>>(_client.getClients());
        }

        /// <summary>
        /// Gets a client by a given id
        /// </summary>
        /// <param name="id">An Id of a client</param>
        /// <returns>Returns a client or null if no record find</returns>
        [HttpGet]
        [Route("api/clientbyid/{id}")]
        [Authorize(Roles = "user, admin")]
        public ClientDTO getClientById(string id)
        {
            return Mapper.Map<Client, ClientDTO>(_client.getClientsById(id));
        }

        /// <summary>
        /// Gets a list of clients that match an specific name
        /// </summary>
        /// <param name="name">Name of the client</param>
        /// <returns>Returns a client or null if no record find</returns>
        [HttpGet]
        [Route("api/clientByname/{name}")]
        [Authorize(Roles = "user, admin")]
        public List<ClientDTO> getClientByName(string name)
        {
            return  Mapper.Map<List<Client>, List<ClientDTO>>(_client.getClientsByName(name)); 
        }

        /// <summary>
        /// Gets a list of policies for a specific client
        /// </summary>
        /// <param name="clientName"'>Name of a client</param>
        /// <returns>Returns a list of policies or null if no record find</returns>
        [HttpGet]
        [Route("api/policies/{clientName}")]
        [Authorize(Roles = "admin")]
        public List<PolicyClientDTO> getPoliciesFrom(string clientName)
        {
            return Mapper.Map<List<Policy>, List<PolicyClientDTO>>(_policy.getPolicyByClientName(clientName));
        }

        /// <summary>
        /// Gets a client whit a specific policy
        /// </summary>
        /// <param name="policyId">the id of the policy</param>
        /// <returns>Returns a client or null if no record find</returns>
        [HttpGet]
        [Route("api/clientPolicy/{policyId}")]
        [Authorize(Roles = "admin")]
        public ClientDTO getClientByPolicy(string policyId)
        {
            return Mapper.Map<Client, ClientDTO>(_client.getClientByPolicy(policyId));
        }

        /// <summary>
        /// This method is inteded for private use. It creates a db using http://www.mocky.io/v2/5808862710000087232b75ac
        /// and http://www.mocky.io/v2/580891a4100000e8242b75c5 data
        /// </summary>
        [HttpGet]
        [Route("api/createdb/{dbName}")]
        [Authorize(Roles = "admin")]
        public void createTableFromRest(string dbName)
        {
            _client.createDB(dbName);
        }
    }
}
