using FInanceTrackerDAL.Models.EntityModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FInanceTrackerDAL.Repository
{
    public interface IUserRepository
    {

        Task AddNewUser(Users users);
        Task<Users> GetUserByEmail(string Username);

    }
}
