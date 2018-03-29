using SQLite;
using System;

namespace backend_api.Models
{
    [Table("users")]
    public class User
    {
        [PrimaryKey, Column("id")]
        public int id { get; set;  }

        [MaxLength(8)]
        public String userName { get; set; }
        [MaxLength(8)]
        public String password { get; set; }
    }
}