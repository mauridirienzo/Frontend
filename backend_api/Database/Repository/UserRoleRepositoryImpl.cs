using System;
using System.Collections.Generic;
using backend_api.Models;
using SQLite;
using backend_api.Helpers;
using System.Web.Http;

namespace backend_api.Repository
{
    public class UserRoleRepositoryImpl : SqLiteBaseRepository, UserRoleRepository
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        private String dbPath;

        public UserRoleRepositoryImpl()
        {
            dbPath = Constants.DEFAULT_DB_PATH;
        }

        public UserRoleRepositoryImpl(String dbPath)
        {
            this.dbPath = dbPath;
        }
        /// <summary>
        /// Gets all roles for a user
        /// </summary>
        /// <param name="userId">Id of the user</param>
        /// <returns>Returns a list of roles for the specific user or null if no role found</returns>
        public List<Role> getRoleByUserId(int userId)
        {
            List<Role> roles = null;

            using (var conn = SqlLiteConnection(dbPath))
            {
                try
                {
                    var result = from s in conn.Table<UserRole>() where s.userId.Equals(userId) select s;
                    roles = new List<Role>();

                    for (int i = 0; i < result.Count(); i++)
                    {
                        roles.Add(conn.Get<Role>(result.ElementAt(i).roleId));
                    }
                }
                catch (Exception e)
                {
                    if (e.GetType() == typeof(InvalidOperationException))
                        return null;
                    log.Error("Error getRoleByUserId: " + e.Message);
                    throw new HttpResponseException(System.Net.HttpStatusCode.InternalServerError);
                }
            }
            return roles;
        }

        /// <summary>
        /// Gets the first user with a rol
        /// </summary>
        /// <param name="rolId">id of a role</param>
        /// <returns>Returns the first user that matchs the role id</returns>
        public User getUserByRoleId(string rolId)
        {
            User user = null;
            UserRole userRole = null;

            using (var conn = SqlLiteConnection(dbPath))
            {
                try
                {
                    var result = from s in conn.Table<UserRole>() where s.roleId.Equals(rolId) select s;
                    userRole = result.FirstOrDefault();

                    if (userRole != null)
                    {
                        user = conn.Get<User>(userRole.userId);
                    }
                }
                catch (Exception e)
                {
                    if (e.GetType() == typeof(InvalidOperationException))
                        return null;
                    log.Error("Error getUserByRoleId: " + e.Message);
                    throw new HttpResponseException(System.Net.HttpStatusCode.InternalServerError);
                }
            }
            return user;
        }
    }
}