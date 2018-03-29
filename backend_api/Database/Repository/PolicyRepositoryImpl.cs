using System;
using System.Collections.Generic;
using backend_api.Models;
using SQLite;
using backend_api.Helpers;
using System.Web.Http;

namespace backend_api.Repository
{
    public class PolicyRepositoryImpl : SqLiteBaseRepository, PolicyRepository
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        private String dbPath;

        public PolicyRepositoryImpl()
        {
            dbPath = Constants.DEFAULT_DB_PATH;
        }

        public PolicyRepositoryImpl(String dbPath)
        {
            this.dbPath = dbPath;
        }
        /// <summary>
        /// Gets a list of policies for a specific client
        /// </summary>
        /// <param name="name"'>Name of a client</param>
        /// <returns>Returns a list of policies or null if no record find</returns>
        public List<Policy> getPolicyByClientName(string name)
        {
            List<Policy> policyList = null;
            Client clientResult = null;

            using (var conn = SqlLiteConnection(dbPath))
            {
                try
                {
                    TableQuery<Client> client = from s in conn.Table<Client>() where s.name.Equals(name) select s;
                    if (client.Count() > 0)
                    {
                        clientResult = client.First();
                        var policyQuery = from s in conn.Table<Policy>() where s.clientId.Equals(clientResult.id) select s;

                        policyList = new List<Policy>();
                        for (int i = 0; i < policyQuery.Count(); i++)
                        {
                            policyList.Add(policyQuery.ElementAt(i));
                        }
                    }
                }
                catch (Exception e)
                {
                    log.Error("Error getPolicyByClientName: " + e.Message);
                    throw new HttpResponseException(System.Net.HttpStatusCode.InternalServerError);
                }
            }
            return policyList;
        }
    }
}