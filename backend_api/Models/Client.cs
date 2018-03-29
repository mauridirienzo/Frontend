using System;
using SQLite;

namespace backend_api.Models
{
    [Table("clients")]
    public class Client
        {
        [PrimaryKey, Column("id")]
        public String id { get; set; }
        [Column("name")]
        public String name { get; set; }
        [Column("email")]
        public String email { get; set; }
    }
}