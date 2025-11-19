using Microsoft.Identity.Client;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FInanceTrackerDAL.Models.DTO
{
    public class IncomeDTO
    {
        public int userId { get; set; }

        public decimal incomeamt { get; set; }

        public string remarks { get; set; }

        public int incometypeId { get; set; }
    }
}
