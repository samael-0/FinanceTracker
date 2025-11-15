using FInanceTrackerDAL.DataAccess;
using FInanceTrackerDAL.Models.EntityModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FInanceTrackerDAL.Repository
{
    public class UserRepository:IUserRepository
    {

        private readonly ISqlDataAccess _db;

        public UserRepository(ISqlDataAccess db)
        {
            _db =db;
        }


        public async Task AddNewUser(Users users)
        {
            string sql = @"INSERT INTO Users(username,Name, Email, PasswordHash, PasswordSalt,role)
                VALUES(@username,@name, @email, @passwordhash, @passwordsalt,@role)";


            var parameters = new
            {
                username = users.username,
                name = users.Name,
                email = users.Email,
                passwordhash = users.PasswordHash,
                passwordsalt = users.PasswordSalt,
                role = users.role,

            };

            await _db.SaveData(sql, parameters);
        }



        public async Task<Users> GetUserByEmail(string Email)
        {
            var sql = @"select * from users where Email = @email";
            var parameters = new
            {
                email = Email
            };
            var result = await _db.GetData<Users, dynamic>(sql, parameters);
            return result.FirstOrDefault();
        }




    
    }
}
