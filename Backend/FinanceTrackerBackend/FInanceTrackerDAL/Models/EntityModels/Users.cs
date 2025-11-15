using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FInanceTrackerDAL.Models.EntityModels
{
    public class Users
    {

        public int UserId { get; set; }
        public string username { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string role { get; set; }

        public string PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }
        public DateTime CreatedAt { get; set; }

    }
}
