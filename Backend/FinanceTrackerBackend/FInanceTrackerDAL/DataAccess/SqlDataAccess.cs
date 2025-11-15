using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace FInanceTrackerDAL.DataAccess
{
    public class SqlDataAccess : ISqlDataAccess
    {
        private readonly IConfiguration _configuration;


        public SqlDataAccess(IConfiguration configuration)
        {
            _configuration = configuration;

        }

        public async Task<IEnumerable<T>> GetData<T, P>(string sql, P parameters, string connectionID = "conn")
        {
            using IDbConnection connection = new SqlConnection(
                _configuration.GetConnectionString(connectionID)
                );

            return await connection.QueryAsync<T>(sql, parameters);

        }




        public async Task SaveData<T>(string sql, T parameters, string connectionID = "conn")
        {

            using IDbConnection connection = new SqlConnection(
                _configuration.GetConnectionString(connectionID));

            await connection.ExecuteAsync(sql, parameters);
        }

    };
}
