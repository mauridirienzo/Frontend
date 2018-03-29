using SQLite;
using System;

namespace backend_api.Models
{
    [Table("roles")]
    public class Role
    {
        [PrimaryKey, Column("id")]
        public int id { get; set; }
        public String rol { get; set; }
    }
}