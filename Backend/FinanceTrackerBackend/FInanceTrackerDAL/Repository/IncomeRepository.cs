using FInanceTrackerDAL.DataAccess;
using FInanceTrackerDAL.Models.EntityModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FInanceTrackerDAL.Repository
{
    public class IncomeRepository:IIncomeRepository
    {


        private readonly ISqlDataAccess _db;

        public IncomeRepository(ISqlDataAccess db)
        {

            _db = db;
        }


        public async Task AddIncome(Income income)
        {
            string sql = @"INSERT INTO income(UserId, IncomeAmt, Remarks,IncomeTypeId)
                VALUES(@userid,@incomeamt,@remarks,@incometypeid)";

            var parameters = new
            {
                userId = income.UserId,
                incomeamt = income.IncomeAmt,
                remarks = income.Remarks,
                incometypeid = income.IncomeTypeId
            };

            Console.WriteLine(parameters);

            await _db.SaveData(sql, parameters);

        }
    }
}
