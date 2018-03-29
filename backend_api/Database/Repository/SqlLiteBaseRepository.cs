using backend_api.Helpers;
using SQLite;
using System;

namespace backend_api.Repository
{
    public class SqLiteBaseRepository
    {
        private static readonly log4net.ILog log = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
     
        public static SQLiteConnection SqlLiteConnection(String DbFile)
        {
            try
            {
                return new SQLiteConnection(DbFile);
            }
            catch (Exception e)
            {
                log.Error("Error getSqlLiteConn: " + e.Message);
                throw e;
            }
        }
    }
}