using FInanceTrackerDAL.Models.DTO;
using FInanceTrackerDAL.Models.EntityModels;
using FInanceTrackerDAL.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinanceTrackerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncomeController : ControllerBase
    {

        private IncomeRepository _repo;

        public IncomeController(IncomeRepository repo)
        {
            _repo = repo;
        }


        [HttpPost("addincome")]
        public async Task<IActionResult> AddIncome(IncomeDTO incomedto)
        {

            var income = new Income
            {
                UserId= incomedto.userId,
                IncomeAmt=incomedto.incomeamt,
                Remarks=incomedto.remarks,
                IncomeTypeId=incomedto.incometypeId

            };

            await _repo.AddIncome(income);

            return Ok();
        }
    }
}
