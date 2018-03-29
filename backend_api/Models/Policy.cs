using SQLite;
using System;

namespace backend_api.Models
{
    [Table("policies")]
    public class Policy
    {
        [PrimaryKey, Column("id")]
        public String id { get; set; }
        public Double amountInsured { get; set; }
        public String email { get; set; }
        public String inceptionDate { get; set; }
        public Boolean installmentPayment { get; set; }
        [Column("clientId")]
        public String clientId { get; set; }
    }
}