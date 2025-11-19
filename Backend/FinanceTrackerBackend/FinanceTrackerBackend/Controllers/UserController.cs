using FInanceTrackerDAL.DataAccess;
using FInanceTrackerDAL.Models.DTO;
using FInanceTrackerDAL.Models.EntityModels;
using FInanceTrackerDAL.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace FinanceTrackerBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly IUserRepository _repo;

        public UserController(IConfiguration config, IUserRepository repo)
        {
            _config = config;
            _repo = repo;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDTO register)
        {
            var hmac = new HMACSHA512();

            var user = new Users
            {
                username = register.Username,
                Email = register.Email,
                Name = register.Name,
                PasswordHash = Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(register.Password))),
                PasswordSalt = hmac.Key
            };

            await _repo.AddNewUser(user);

            return Ok(register);
        }



        [HttpPost("login")]
        public async Task<IActionResult>Login(LoginDTO login)
        {
            try
            {
                var user = await _repo.GetUserByEmail(login.Email);

                if (user == null)
                {
                    return Unauthorized("User not found");

                }
                var hmac = new HMACSHA512(user.PasswordSalt);

                var passwordHash= Convert.ToBase64String(hmac.ComputeHash(Encoding.UTF8.GetBytes(login.Password)));

                if(passwordHash!= user.PasswordHash)
                {
                    return Unauthorized("invalid password");

                }
                var token = GenerateToken(user);
                Console.WriteLine(token);
                return Ok(new { token });
            }
            catch(Exception ex)
            {
                return StatusCode(500, "Something went wrong : " + ex.Message);
            }
        }






        ////JWT SETUP TO GENERATE TOKEN
        ///

        private string GenerateToken(Users users)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name,users.username),
                new Claim(ClaimTypes.NameIdentifier,users.UserId.ToString()),
            };


            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["TokenKey"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);


            var token = new JwtSecurityToken(
             claims: claims,
              expires: DateTime.Now.AddHours(1),
            signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);

        }
    }



}
