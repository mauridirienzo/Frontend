using SQLite;
using System;

namespace backend_api.Models
{
    [Table("users_roles")]
    public class UserRole
    {
        [PrimaryKey, Column("user_id")]
        public String userId { get; set; }
        [PrimaryKey, Column("role_id")]
        public int roleId { get; set; }
    }
}