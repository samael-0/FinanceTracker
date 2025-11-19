using FInanceTrackerDAL.Models.EntityModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FInanceTrackerDAL.Repository
{
    public interface IIncomeRepository
    {

        Task AddIncome(Income income);
    }
}
