using backend_api.Repository;
using backend_api.DTO;
using backend_api.Helpers;
using backend_api.Models;
using backend_api.Repository;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace BackEnd.Tests
{
    [TestClass]
    public class TestMainController
    {
        [TestMethod]
        public void getAllClients_ShouldReturnAllClients()
        {
            string dbPath;
            List<Client> clientList;

            dbPath = Constants.TEST_DB_PATH;
            clientList = new ClientRepositoryImpl(dbPath).getClients();
         
            Assert.AreEqual(clientList.Count, 194);
        }

        [TestMethod]
        public void getClientbyid_ShouldReturnAClient()
        {
            string dbPath;
            Client client;
            string id;
            string expectedName;
            string expectedMail;

            expectedName = "Bethany";
            expectedMail = "bethanyblankenship@quotezart.com";
            id = "2dbaac64-c13b-4d02-a980-e03627dee50d";
            dbPath = Constants.TEST_DB_PATH;
            client = new ClientRepositoryImpl(dbPath).getClientsById(id);

            Assert.AreEqual(client.name, expectedName);
            Assert.AreEqual(client.email, expectedMail);
        }

        [TestMethod]
        public void getClientbyid_not_found_ShouldReturnNull()
        {
            string dbPath;
            Client client;
            string id;

            id = "fake id";
            dbPath = Constants.TEST_DB_PATH;
            client = new ClientRepositoryImpl(dbPath).getClientsById(id);

            Assert.IsNull(client);
           
        }

        [TestMethod]
        public void getClientByName()
        {
            string dbPath;
            string name;
            string mail;

            name = "Julia";
            mail = "juliablankenship@quotezart.com";
            dbPath = Constants.TEST_DB_PATH;
            var listClient = new ClientRepositoryImpl(dbPath).getClientsByName(name);

            Assert.IsNotNull(listClient);
            Assert.AreEqual(listClient.Count, 1);
            Assert.AreEqual(listClient[0].name, name);
            Assert.AreEqual(listClient[0].email, mail);
        }

        [TestMethod]
        public void getClientByPolicy()
        {
            string dbPath;
            Client client;
            string policyId;
            string expectedClienId;
            string expectedClienName;

            expectedClienId ="e8fd159b-57c4-4d36-9bd7-a59ca13057bb";
            policyId = "3a774f4e-0e70-488f-ac9f-ee211c8d5ece";
            expectedClienName = "Manning";
            dbPath = Constants.TEST_DB_PATH;
            client = new ClientRepositoryImpl(dbPath).getClientByPolicy(policyId);

            Assert.IsNotNull(client);
            Assert.AreEqual(client.id, expectedClienId);
            Assert.AreEqual(client.name, expectedClienName);
        }
    }
}
