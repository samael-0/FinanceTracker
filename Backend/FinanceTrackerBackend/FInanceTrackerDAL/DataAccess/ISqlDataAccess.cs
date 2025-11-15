using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FInanceTrackerDAL.DataAccess
{
    public interface ISqlDataAccess
    {



        Task<IEnumerable<T>> GetData<T, P>(string sql, P parameters, string connectionID = "conn");
        Task SaveData<T>(string sql, T parameters, string connectionID = "conn");

    }
}
