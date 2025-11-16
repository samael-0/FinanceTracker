using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FInanceTrackerDAL.Models.EntityModels
{
    public class Income
    {
        public int IncomeId { get; set; }
        public int UserId { get; set; }

        public decimal IncomeAmt { get; set; }

        public string Remarks { get; set; }

        public DateTime Created_at { get; set; }

        public int IncomeTypeId { get; set; }


    }
}
