using System;
using System.IO;

namespace backend_api.Helpers
{
    public class Constants
    {
        public static readonly String ADMIN_ROLE = "admin";
        public static readonly String USER_ROLE = "user";
        public static readonly String SQL_DATA_BASE_FOLDER = "Database";
        public static readonly String SQL_DATA_name = "data_base";
        public static readonly String SQL_DATA_TEST_BASE_FOLDER = "Test_database";
        public static readonly String SQL_TEST_DATA_name = "test_db";
        public static readonly String DEFAULT_DB_PATH = Path.Combine(AppDomain.CurrentDomain.BaseDirectory +"\\"+ Constants.SQL_DATA_BASE_FOLDER, Constants.SQL_DATA_name);
        public static readonly String TEST_DB_PATH = Path.Combine(AppDomain.CurrentDomain.BaseDirectory + "\\"+ Constants.SQL_DATA_TEST_BASE_FOLDER, Constants.SQL_TEST_DATA_name);
    }
}