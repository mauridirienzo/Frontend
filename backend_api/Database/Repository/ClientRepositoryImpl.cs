using System;
using System.Collections.Generic;
using backend_api.Models;
using System.Web.Http;
using SQLite;
using backend_api.Helpers;
using Newtonsoft.Json;
using System.Text;
using System.IO;

namespace backend_api.Repository
{
    public class ClientRepositoryImpl : SqLiteBaseRepository, ClientRepository
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        private String dbPath;
      
        public ClientRepositoryImpl()
        {
            this.dbPath = Constants.DEFAULT_DB_PATH;
        }
           
        public ClientRepositoryImpl(String dbPath)
        {
            this.dbPath = dbPath;          
        }

        /// <summary>
        /// Gets a client whit a specific policy
        /// </summary>
        /// <param name="policyId">the id of the policy</param>
        /// <returns>Returns a client or null if no record find</returns>
        public Client getClientByPolicy(string policyId)
        {        
            Client clientResult = null;
  
            using (var conn = SqlLiteConnection(dbPath))
            {
                try
                {
                    TableQuery<Policy> policy = from s in conn.Table<Policy>() where s.id.Equals(policyId) select s;
                    Policy poliyResult = policy.FirstOrDefault();

                    if (poliyResult != null)
                        clientResult = conn.Get<Client>(poliyResult.clientId);
                }
                catch (Exception e)
                {
                    log.Error("Error getClientByPolicy: " + e.Message);
                    throw new HttpResponseException(System.Net.HttpStatusCode.InternalServerError);
                }
            }
                return clientResult;
            }

        /// <summary>
        /// Gets all clients from db
        /// </summary>
        /// <returns>Returns a list of clients or null if empty</returns>
        public List<Client> getClients()
        {
            List<Client> clientListReturn = null;

            using (var conn = SqlLiteConnection(dbPath))
            {
                try
                {
                    clientListReturn = new List<Client>();
                    TableQuery<Client> clientList = conn.Table<Client>();

                    for (int i = 0; i < clientList.Count(); i++)
                    {
                        clientListReturn.Add(clientList.ElementAt(i));
                    }
                }
                catch (Exception e)
                {
                    log.Error("Error getClients: " + e.Message);
                    throw new HttpResponseException(System.Net.HttpStatusCode.InternalServerError);
                }
            }
            return (clientListReturn.Count != 0) ? clientListReturn : null;
        }

        /// <summary>
        /// Gets a client by a given id
        /// </summary>
        /// <param name="id">An Id of a client</param>
        /// <returns>Returns a client or null if no record find</returns>
        public Client getClientsById(string clientId)
        {
            Client client = null;
            
            using (var conn = SqlLiteConnection(dbPath))
            {
                try
                {
                    client = conn.Get<Client>(clientId);
                }
                catch (Exception e)
                {
                    if (e.GetType() == typeof(InvalidOperationException))
                        return null;

                    log.Error("Error getClientsById: " + e.Message);
                    throw new HttpResponseException(System.Net.HttpStatusCode.InternalServerError);
                }
            }
            return client;
        }

        public List<Client> getClientsByName(string clientName)
        {
            List<Client> clientList = new List<Client>();

            using (var conn = SqlLiteConnection(dbPath))
            {
                try
                {
                    TableQuery<Client> clientResults = from s in conn.Table<Client>() where s.name.Equals(clientName) select s;

                    for (int i = 0; i < clientResults.Count(); i++){
                        clientList.Add(clientResults.ElementAt(i));
                    }

                   
                }
                catch (Exception e)
                {
                    log.Error("Error getClientsByName: " + e.Message);
                    throw new HttpResponseException(System.Net.HttpStatusCode.InternalServerError);
                }
            }
            return (clientList.Count != 0) ? clientList : null;
        }

        /// <summary>
        /// This method is inteded for private use. It retrives and creates a db from http://www.mocky.io/v2/5808862710000087232b75ac
        /// and http://www.mocky.io/v2/580891a4100000e8242b75c5
        /// </summary>
        /// <param name="dbName">name of the db to be created</param>
        public void createDB(String dbName)
        {
            var dbPath = AppDomain.CurrentDomain.BaseDirectory + Constants.SQL_DATA_BASE_FOLDER;
            dbPath = Path.Combine(dbPath, dbName);

            using (var connection = SqlLiteConnection(dbPath))
            {
                if (Constants.SQL_DATA_name.Equals(dbName))
                {
                    log.Error("Database name can not be " + Constants.SQL_DATA_name);
                    throw new HttpResponseException(System.Net.HttpStatusCode.Forbidden);
                }
                try
                {
                    StringBuilder createStatement = new StringBuilder(" DROP TABLE IF EXISTS clients;\n");
                    createStatement.Append("CREATE TABLE clients (id STRING PRIMARY KEY NOT NULL, name VARCHAR (100), email VARCHAR (100)); \n");
                    var clientsurl = "http://www.mocky.io/v2/5808862710000087232b75ac";
                    string clientJson = new System.Net.WebClient().DownloadString(clientsurl);
                    JSONClients clientList = JsonConvert.DeserializeObject<JSONClients>(clientJson);

                    foreach (Client client in clientList.clients)
                    {
                        createStatement.Append("INSERT INTO clients(id, name, email) VALUES('" + client.id + "', '" + client.name + "', '" + client.email + "');\n");
                    }
                    createStatement.Append("DROP TABLE IF EXISTS policies;\n");
                    createStatement.Append("CREATE TABLE policies (id STRING PRIMARY KEY NOT NULL, amountInsured DOUBLE, email VARCHAR (100), inceptionDate DATE, installmentPayment BOOLEAN, clientId STRING REFERENCES clients (id));\n");

                    var policiesulr = "http://www.mocky.io/v2/580891a4100000e8242b75c5";
                    string policiesJson = new System.Net.WebClient().DownloadString(policiesulr);
                    JSONPolicies policiesList = JsonConvert.DeserializeObject<JSONPolicies>(policiesJson);

                    foreach (Policy policy in policiesList.policies)
                    {
                        createStatement.Append("INSERT INTO policies (id, amountInsured, email, inceptionDate, installmentPayment, clientId) VALUES ('" + policy.id + "', " + policy.amountInsured + ", '" + policy.email + "', '" + policy.inceptionDate + "', '" + policy.installmentPayment + "', '" + policy.clientId + "');\n");
                    }

                    createStatement.Append("DROP TABLE IF EXISTS roles;\n");
                    createStatement.Append("CREATE TABLE roles(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, rol VARCHAR(25) NOT NULL);\n");
                    createStatement.Append("INSERT INTO roles(id, rol) VALUES(1, 'user');");
                    createStatement.Append("INSERT INTO roles(id, rol) VALUES(2, 'admin');");

                    createStatement.Append("DROP TABLE IF EXISTS users;\n");
                    createStatement.Append("CREATE TABLE users(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, userName VARCHAR(45) UNIQUE NOT NULL, password STRING UNIQUE NOT NULL);\n");
                    createStatement.Append("INSERT INTO users(id, userName, password) VALUES(1, 'user', 'dXNlcg==');\n");
                    createStatement.Append("INSERT INTO users(id, userName, password) VALUES(2, 'admin', 'YWRtaW4=');\n");
                    createStatement.Append("INSERT INTO users(id, userName, password) VALUES(3, 'mauricio', 'dGVzdGJjbg==');\n");

                    createStatement.Append("DROP TABLE IF EXISTS users_roles;\n");
                    createStatement.Append("CREATE TABLE users_roles(user_id STRING REFERENCES users(id), role_id INTEGER REFERENCES roles(id), PRIMARY KEY(user_id, role_id));\n");
                    createStatement.Append("INSERT INTO users_roles(user_id, role_id) VALUES(1, 1);\n");
                    createStatement.Append("INSERT INTO users_roles(user_id, role_id) VALUES(2, 1);\n");
                    createStatement.Append("INSERT INTO users_roles(user_id, role_id) VALUES(3, 1);\n");
                    createStatement.Append("INSERT INTO users_roles(user_id, role_id) VALUES(2, 2);\n");


                    connection.BeginTransaction();
                    connection.Execute(createStatement.ToString());
                    connection.Commit();

                }
                catch (Exception e)
                {
                    log.Error("Error getClientsByName: " + e.Message);
                    throw new HttpResponseException(System.Net.HttpStatusCode.InternalServerError);
                }
            }
        }
    }
}