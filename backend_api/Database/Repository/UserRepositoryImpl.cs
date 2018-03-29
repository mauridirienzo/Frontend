using backend_api.Helpers;
using backend_api.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Web.Http;

namespace backend_api.Repository
{
    public class UserRepositoryImpl : SqLiteBaseRepository, UserRepository
    {
       private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
       private String dbPath;

        public UserRepositoryImpl()
        {
            dbPath = AppDomain.CurrentDomain.BaseDirectory + "/" + Constants.SQL_DATA_BASE_FOLDER;
            dbPath = Path.Combine(dbPath, Constants.SQL_DATA_name);
        }

        public UserRepositoryImpl(String dbPath)
        {
            this.dbPath = dbPath;
        }
        /// <summary>
        /// Gets all users from db
        /// </summary>
        /// <returns>Returns a list of users or null if empty</returns>
        public List<User> getUsers()
        {
            List<User> userListReturn =null;

            using (var conn = SqlLiteConnection(dbPath))
            {
                try
                {
                    userListReturn = new List<User>();
                    var userList = conn.Table<User>();

                    for (int i = 0; i < userList.Count() - 1; i++)
                    {
                        userListReturn.Add(userList.ElementAt(i));
                    }
                }
                catch (Exception e)
                {
                    log.Error("Error getUsers: " + e.Message);
                    throw new HttpResponseException(System.Net.HttpStatusCode.InternalServerError);
                }
            }

            return (userListReturn.Count != 0) ? userListReturn : null;
        }

        /// <summary>
        /// Validates a user based on the name and password
        /// </summary>
        /// <param name="name">Name of the user</param>
        /// <param name="pass">Password of the user</param>
        /// <returns>Returns a User if creadentials are ok, otherwise returs null</returns>
        public User validateUser(string name, string pass)
        {
            User user = null;
            String decPass;

            using (var conn = SqlLiteConnection(dbPath))
            {
                try
                {
                    decPass = CrypUtil.Base64Encode(pass);
                    var result = from s in conn.Table<User>() where s.userName.Equals(name) where s.password.Equals(decPass) select s;
                    user = result.FirstOrDefault();
                }
                catch (Exception e)
                {
                    if (e.GetType() == typeof(InvalidOperationException))
                        return null;
                    log.Error("Error validateUser: " + e.Message);
                    throw new HttpResponseException(System.Net.HttpStatusCode.InternalServerError);
                }
            }
            return user;
        }
    }
}