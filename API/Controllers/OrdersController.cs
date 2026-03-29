using API.Models;
using API.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {

        private readonly IOrderFacade _facade;

        public OrdersController(IOrderFacade facade)
        {
            _facade = facade;
        }

        [HttpPost("search")]
        public IActionResult SearchOrders([FromBody] OrderSearchRequest request)
        {
            try
            {
                if (request == null)
                    return BadRequest("Request body is required");

                var data = _facade.SearchOrders(request);

                return Ok(data);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    Success = false,
                    Message = "Error occurred while fetching orders",
                    Error = ex.Message
                });
            }
        }
    }
}
